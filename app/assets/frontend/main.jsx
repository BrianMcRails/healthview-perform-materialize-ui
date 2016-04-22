import React from 'react';
import ReactDOM from 'react-dom';
import { history } from 'react-router/lib/BrowserHistory';
import  { Router, Route, Link } from 'react-router';


import Index from './components/index';

class App extends React.Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

 let documentReady = () => {
 	let reactNode = document.getElementById('react');

 	if (reactNode){
 		ReactDOM.render(
 			<Router history={history}>
 				<Route component={App}>
 					<Route path="/" component={Index} />
 				</Route>	
 			</Router>
 			, reactNode);
 	}
 };

 $(documentReady);
 
