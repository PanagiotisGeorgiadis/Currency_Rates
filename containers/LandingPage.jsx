import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCurrencyRates } from "../actions/LandingPageActions";

import Header from "../components/Generic/Header";
import LandingPageContentContainer from "../components/LandingPage/LandingPageContentContainer";

class LandingPage extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillReceiveProps(nextProps) {

		this.setState({
			...nextProps
		});
	}

	componentWillMount() {

		this.props.getCurrencyRates();
		this.setState({
			...this.props
		});
	}

	render() {
		console.log(this.state);
		return (
			<div className = "landing_page_container">
				<Header headerClassName = { "landing_page_header" } headerText = { "Welcome to Currency Rates App!" } />
				<LandingPageContentContainer />
			</div>
		);
	}
}

const mapStateToProps = ({LandingPageReducer}) => {

	return {
		...LandingPageReducer
	}
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		getCurrencyRates
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
