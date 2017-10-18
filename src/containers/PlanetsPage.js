import React, { Component } from 'react';
import WithDataHOC from '../HOC/WithDataHOC'
import List from '../components/common/List'
import Planet from '../components/Planet'

const PlanetsPage =  ({ data: planetsData }) => {
	console.log(planetsData);
	return (
		<div>
			<h4 className="page-title text-center">
				Star Wars Planets:
			</h4>
			<List list={ planetsData.results }
	          	render={ planet => <Planet key={planet.url} item={ planet } /> }
			/>
		</div>
	)
}

PlanetsPage.propTypes = {
  data: React.PropTypes.object.isRequired,
};


export default WithDataHOC('https://swapi.co/api/planets/')(PlanetsPage)