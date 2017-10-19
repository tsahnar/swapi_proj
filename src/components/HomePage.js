import React, { Component } from 'react';
import { Link } from 'react-router-dom';
require('./HomePage.scss');


const HomePage = () => (
	<div className="home-page">
		<div className="categories container">
			<h4 className="page-title">
				Choose from the following categories:
			</h4>
			<div className="row">
				<Link className="col-xs-12 col-sm-6 item"  to="/characters">
					<button className="btn btn-default">
						Characters
					</button>
				</Link>			
				<Link className="col-xs-12 col-sm-6 item" to="/films">
					<button className="btn btn-default  ">
						Films
					</button>
				</Link>
				<Link className="col-xs-12 col-sm-6 item" to="/starShips">
					<button className="btn btn-default  ">
						Star Ships
					</button>
				</Link>
				<Link className="col-xs-12 col-sm-6 item" to="/planets">
					<button className="btn btn-default  ">
						Planets
					</button>
				</Link>
			</div>
		</div>
	</div>
)

export default HomePage;