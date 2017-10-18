import React, { Component } from 'react';
import Spinner from '../components/common/Spinner'

// This higher order component handles fetching data from swapi.
// A url (SWAPI endpint) must be provided for every component this HOC wraps.

const WithDataHOC = url => Component => (
  class extends React.Component {

    constructor(props) {
      super(props)
      this.state = { data: null, loadMore: false, fetchError: false}
    }

    componentDidMount() {
      this.fetchData(url, (data) => this.setState({ data }))
    }

    loadMore(){
      this.setState({ loadMore: true });
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
          this.setState({ data, loadMore: false });
        })
        .catch(err => { 
          this.setState({loadMore: false});
          alert('Error Loading data from: ' + url)
        })
    }
    
    render() {
      const { data, loadMore} = {...this.state};
      if (data){
        return (
              <div>
                <Component {...this.props} {...this.state} />
                { data.next && 
                  ( <div className="text-center">
                      <button disabled={loadMore} className="load-more-btn btn btn-default" 
                              onClick={() => this.loadMore()}>
                              Load More
                      </button>
                    </div>
                  )
                }
              </div>
          )
      }else{
        return <Spinner/>
      }
    }
  }
)

WithDataHOC.propTypes = {
  url: React.PropTypes.string.isRequired,
};


export default WithDataHOC