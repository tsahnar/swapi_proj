import React, { Component } from 'react';
import WithFavoriteHOC from '../HOC/WithFavoriteHOC'
import PropTypes from 'prop-types';
	
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
  item: PropTypes.object.isRequired,
};



export default WithFavoriteHOC(Film);