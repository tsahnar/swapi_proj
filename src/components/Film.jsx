import React, { Component } from 'react';
import WithFavoriteHOC from '../HOC/WithFavoriteHOC'
	
// Render single film item

const Film =  ({ item: film, children}) => (
	<li>
		<div className="list-item-title">{film.title}</div>
		<div className="list-info">
			<span>Director: {film.director}</span>
		</div>
		{children}
	</li>
)

Film.propTypes = {
  item: React.PropTypes.object.isRequired,
};



export default WithFavoriteHOC(Film);