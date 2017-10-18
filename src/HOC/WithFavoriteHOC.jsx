import React, { Component } from 'react';
import FavoritesHandler from '../modules/FavoritesHandler'

// This higher order component handles adding/removing favorites 
// Each component this HOC wraps enhanced with the add to favorites functionality.
// The favorite "star button" is rendered as "children" props in wrapped component
  
const WithFavoriteHOC = Component => (
  class extends React.Component {

    constructor(props) {
      super(props)
      
      // Init item isFavorite state to be able to display if the item was already added to favorites
      this.state = { isFavorite: FavoritesHandler.checkIfFavorite(this.props.item.url)}
    }

    handleFavoriteClick(){
      FavoritesHandler.addRemoveFromFavorites(this.state.isFavorite, this.props.item.url)
      this.setState({ isFavorite: !this.state.isFavorite })
    }
    
    render() {
      let favClass = this.state.isFavorite ? 'on' : '';
      return  (
          <Component {...this.props} {...this.state} >
            <div className="favorite">
              <span className={'glyphicon glyphicon-star favorite ' + favClass}
                    onClick={() => {this.handleFavoriteClick()}}>
              </span>
            </div>
          
          </Component>

      ) 
    }
  }
)

WithFavoriteHOC.propTypes = {
  item: React.PropTypes.object.isRequired,
};

export default WithFavoriteHOC

 // 