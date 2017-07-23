import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCurrencyRates } from "../actions/CurrencyRatesActions";

import Header from "../components/Generic/Header";

class EnhancedCurrencyRatesPage extends Component {

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

		return (
			<div className = "about_page_container">
				<Header headerClassName = { "page_header" } headerText = { "Welcome to the enhanced currency rates page!" } />
			</div>
		);
	}
}

const mapStateToProps = ({CurrencyRatesReducer}) => {

	return {
	}
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		getCurrencyRates
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedCurrencyRatesPage);
