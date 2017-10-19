import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../components/common/Spinner'


// This higher order component handles fetching data from swapi.
// A url (SWAPI endpint) must be provided for every component this HOC wraps.

const WithDataHOC = url => Component => (
  class extends React.Component {

    constructor(props) {
      super(props)
      this.state = { data: {}, loading: true, fetchError: false}
    }

    componentDidMount() {
      this.fetchData(url, (data) => this.setState({ data }))
    }

    loadMore(){
      this.setState({ loading: true });
      this.fetchData(this.state.data.next, (data) => {
        let currDataResults = this.state.data.results;
        let newDataResults  = currDataResults.concat(data.results);
        data.results = newDataResults;
      });
    }

    // Hanlde API calls 
    // Succes callback which excepts the data retrieved in order to update the state 
    fetchData(url, successCb){
      fetch(url)
        .then(response => response.json())
        .then(data => { 
          successCb && successCb(data)
          this.setState({ data, loading: false, fetchError: false });
        })
        // Hanle exception
        .catch(err => { 
          this.setState({loading: false, fetchError:true});
        })
    }
    
    render() {
      const { data, loading, fetchError} = {...this.state};
      return (
        <div>
         {data.results &&  <Component {...this.props} {...this.state} />}
         {fetchError && 
            <div className="alert alert-danger">
              Couldnt retrieve data from: {url}
            </div>
         }
         {loading && <Spinner/>}
         { data.next && 
             <div className="text-center">
                <button disabled={loading} className="load-more-btn btn btn-default" 
                        onClick={() => this.loadMore()}>
                        Load More
                </button>
              </div>
          }
        </div>
      )
    }
  }
)

WithDataHOC.propTypes = {
  url: PropTypes.string.isRequired,
};


    // if (data.results){
    //     return (
    //         <div>
    //          
    //           { data.next && 
    //             ( <div className="text-center">
    //                 <button disabled={loadMore} className="load-more-btn btn btn-default" 
    //                         onClick={() => this.loadMore()}>
    //                         Load More
    //                 </button>
    //               </div>
    //             )
    //           }
    //         </div>
    //       )
    //   }else{
    //     return <Spinner/>
    //   }
export default WithDataHOC