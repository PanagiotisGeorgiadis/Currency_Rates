import React, { Component } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/";
import initialState from "./CurrencyRatesState";

import NavigationMenu from "./containers/NavigationMenu.jsx";

import LandingPage from "./containers/LandingPage.jsx";
import AboutPage from "./containers/AboutPage.jsx";
import PlainCurrencyRatesPage from "./containers/PlainCurrencyRatesPage.jsx";
import EnhancedCurrencyRatesPage from "./containers/EnhancedCurrencyRatesPage.jsx";

import CurrencyHistoryPage from "./containers/CurrencyHistoryPage.jsx";

export default class CurrencyRatesApp extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		return(
			<Router>
				<div>
					<NavigationMenu />
					<Route exact path = "/" component = { LandingPage } />
					<Route exact path = "/plain_rates" component = { PlainCurrencyRatesPage } />
					<Route exact path = "/enhanced_rates" component = { LandingPage } />
					<Route exact path = "/about" component = { AboutPage } />
					<Route exact path = "/currency/:name" component = { CurrencyHistoryPage } />
				</div>
			</Router>
		)
	}
}

var reactRoot = document.getElementById("react-root");
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

ReactDOM.render(<Provider store = { store } >
					<CurrencyRatesApp />
				</Provider>,
				reactRoot);