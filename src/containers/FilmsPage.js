import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WithDataHOC from '../HOC/WithDataHOC'
import List from '../components/common/List'
import Film from '../components/Film'

const FilmsPage =  ({ data: filmsData }) => {
	return (
		<div>
			<h4 className="page-title text-center">
				Star Wars Films:
			</h4>
			<List list={ filmsData.results }
	          	  render={ film => <Film key={film.url} item={ film } /> }
			/>
		</div>
	)
}

FilmsPage.propTypes = {
  data: PropTypes.object.isRequired,
};


export default WithDataHOC('https://swapi.co/api/films/')(FilmsPage)