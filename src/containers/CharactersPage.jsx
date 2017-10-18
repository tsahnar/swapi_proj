import React, { Component } from 'react';
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

CharactersPage.propTypes = {
  data: React.PropTypes.object.isRequired,
};


export default WithDataHOC('https://swapi.co/api/people/')(CharactersPage)