import React, { Component } from 'react';
import WithFavoriteHOC from '../HOC/WithFavoriteHOC'

// Render single Character item

const Character = ({item: character, children}) => (
	<li >
		<div className="list-item-title">{character.name}</div>

		<div className="list-info">
			<span>Birth year: {character.birth_year}</span>
		</div>
		{children}
	</li>
)

Character.propTypes = {
  item: React.PropTypes.object.isRequired,
};


export default WithFavoriteHOC(Character);