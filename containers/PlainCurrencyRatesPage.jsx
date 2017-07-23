import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCurrencyRates } from "../actions/CurrencyRatesActions";

import Header from "../components/Generic/Header";
import DateInput from "../components/CurrencyRates/DateInput";
import CurrencyInput from "../components/CurrencyRates/CurrencyInput";

class PlainCurrencyRatesPage extends Component {

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

	handleDateChange(event) {

		console.log(event.target.value);
	}

	render() {
		// console.log(this.state.currencyRates);
		let currencies = [];
		for(var props in this.state.currencyRates.rates) {
			currencies.push(props);
		}
		return (
			<div className = "about_page_container">
				<Header headerStyle = {{ textAlign: "center" }} headerText = { "Welcome to the plain currency rates page!" } />
				<DateInput minDate = { "1999-01-01" } maxDate = { "2017-07-23" } defaultDateValue = { "2017-07-23" } onChangeHandler = { this.handleDateChange.bind(this) } />
				<CurrencyInput currencies = { currencies } />
			</div>
		);
	}
}

const mapStateToProps = ({CurrencyRatesReducer}) => {

	return {
		...CurrencyRatesReducer
	}
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		getCurrencyRates
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlainCurrencyRatesPage);
