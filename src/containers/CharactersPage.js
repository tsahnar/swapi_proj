import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WithDataHOC from '../HOC/WithDataHOC'
import List from '../components/common/List'
import Character from '../components/Character'


const CharactersPage  = ({ data: filmsData}) => {
	return (
		<div>
			<h4 className="page-title text-center">
				Star Wars Characters:
			</h4>
			<List list={ filmsData.results }
	          render={ c => <Character key={c.url} item={ c } /> }
				 />
		</div>
	)
}

// Data property is required in order to render content
CharactersPage.propTypes = {
  data: PropTypes.object.isRequired,
};


export default WithDataHOC('https://swapi.co/api/people/')(CharactersPage)