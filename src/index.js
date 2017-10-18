import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import CharactersPage from './containers/CharactersPage';
import FilmsPage from './containers/FilmsPage';
import StarShipsPage from './containers/StarShipsPage';
import PlanetsPage from './containers/PlanetsPage';
require('./style/common.scss');

ReactDOM.render(
    <BrowserRouter >
	    <div className="app-wrapper">
	    	<div className="jumbotron text-center">
				<Link to="/"><h1 className="text-center">Star Wars API</h1></Link>
			</div>
			<div className="container">
		    	<Switch>
		    		<Route  exact path="/" component={HomePage}/>
		    		<Route  path="/characters" component={CharactersPage}/>
		    		<Route  path="/films" component={FilmsPage}/>
		    		<Route  path="/starShips" component={StarShipsPage}/>
		    		<Route  path="/planets" component={PlanetsPage}/>
		    	</Switch>
		    </div>
	    </div>
    </BrowserRouter>
  , document.querySelector('#SwapiApp'));
