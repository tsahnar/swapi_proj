import React, { Component } from 'react';
import WithFavoriteHOC from '../HOC/WithFavoriteHOC'
	
// Render single film item

const Planet =  ({ item: planet, children}) => (
	<li>
		<div className="list-item-title">{planet.name}</div>
		<div className="list-info">
			<span>Population: {planet.population}</span>
		</div>
		{children}
	</li>
)

Planet.propTypes = {
  item: React.PropTypes.object.isRequired,
};



export default WithFavoriteHOC(Planet);