import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCurrencyRates } from "../actions/CurrencyRatesActions";

import Header from "../components/Generic/Header";
import LoadingImage from "../components/Generic/LoadingImage";
import ErrorMessage from "../components/Generic/ErrorMessage";

import CurrencyInputContainer from "../components/CurrencyRates/CurrencyInputContainer";

class PlainCurrencyRatesPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currencyNames: [],
			selectedDate: "",
			selectedCurrency: "",
		};
	}

	componentWillReceiveProps(nextProps) {

		this.setState({
			...nextProps
		});
	}

	componentWillMount() {

		this.props.getCurrencyRates();
		this.setState({
			...this.props,
		});
	}

	handleDateChange(event) {

		this.setState({
			selectedDate: event.target.value
		});
	}

	handleCurrencyChange(event) {

		this.setState({
			selectedCurrency: event.target.value
		});
	}

	handleSubmit(event) {

		// console.log(event.target.value);
		console.log(this.state.selectedCurrency);
		console.log(this.state.selectedDate);
	}

	render() {

		if(this.state.showErrorMessage) {
			return (
				<ErrorMessage errorMessageText = { this.state.errorMessage } />
			);
		} else if(this.state.showLoadingImage) {
			return (
				<LoadingImage />
			);
		} else {
			return (
				<div className = "currency_content_container">
					<Header headerClassName = { "page_header" } headerText = { "Welcome to the plain currency rates page!" } />
					<CurrencyInputContainer onCurrencyChangeHandler = { this.handleCurrencyChange.bind(this) } currencyNames = { this.state.currencyNames } onDateChangeHandler = { this.handleDateChange.bind(this) } onSubmitHandler = { this.handleSubmit.bind(this) } />
				</div>
			);
		}
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
