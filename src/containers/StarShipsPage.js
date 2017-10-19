import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WithDataHOC from '../HOC/WithDataHOC'
import List from '../components/common/List'
import StarShip from '../components/StarShip'

const StarShipsPage =  ({ data: starshipsData }) => {
	return (
		<div>
			<h4 className="page-title text-center">
				Star Wars Films:
			</h4>
			<List list={ starshipsData.results }
	          	render={ sp => <StarShip key={sp.url} item={ sp } /> }
			/>
		</div>
	)
}

StarShipsPage.propTypes = {
  data: PropTypes.object.isRequired,
};


export default WithDataHOC('https://swapi.co/api/starships/')(StarShipsPage)