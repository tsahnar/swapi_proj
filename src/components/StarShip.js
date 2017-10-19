import React, { Component } from 'react';
import WithFavoriteHOC from '../HOC/WithFavoriteHOC'
import PropTypes from 'prop-types';
	
// Render single film item

const StarShip =  ({ item: starShip, children}) => (
	<li>
		<div className="list-item-title">{starShip.name}</div>
		<div className="list-info">
			<span>Manufacturer: {starShip.manufacturer}</span>
		</div>
		{children}
	</li>
)

StarShip.propTypes = {
  item: PropTypes.object.isRequired,
};



export default WithFavoriteHOC(StarShip);