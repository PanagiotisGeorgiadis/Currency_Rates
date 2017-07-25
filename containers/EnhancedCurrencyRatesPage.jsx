import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCurrencyNames, getCurrencyRates, drawLoadingImage,
		updateSelectedCurrency, updateSelectedDate,
		updateSecondaryCurrency } from "../actions/CurrencyRatesActions";

import Header from "../components/Generic/Header";
import LoadingImage from "../components/Generic/LoadingImage";
import ErrorMessage from "../components/Generic/ErrorMessage";

import Chart from "../components/Charts/Chart";
import CurrencyInputContainer from "../components/CurrencyRates/CurrencyInputContainer";

class EnhancedCurrencyRatesPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currencyNames: [],
			selectedDate: "",
			selectedCurrency: "EUR",
		};
	}

	componentWillReceiveProps(nextProps) {

		this.setState({
			...nextProps
		});
	}

	componentWillMount() {

		if(!this.props.currencyNames.length)
			this.props.getCurrencyNames();

		this.setState({
			...this.props
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

		if(this.state.selectedDate && this.state.selectedCurrency) {

			var url = "http://api.fixer.io/" + this.state.selectedDate + "?base=" + this.state.selectedCurrency;
			this.state.drawLoadingImage();
			this.state.updateSelectedCurrency(this.state.selectedCurrency);
			this.state.updateSelectedDate(this.state.selectedDate);

			this.state.getCurrencyRates(url);
		}
	}

	render() {

		let pageContents = [];
		if(this.state.showErrorMessage) {

			pageContents.push(<ErrorMessage key = { 0 } errorMessageText = { this.state.errorMessage } />);
		} else if(this.state.showLoadingImage) {

			pageContents.push(<LoadingImage key = { 0 } />);
		} else {

			pageContents.push(<CurrencyInputContainer key = { 0 } onCurrencyChangeHandler = { this.handleCurrencyChange.bind(this) } currencyNames = { this.state.currencyNames } onDateChangeHandler = { this.handleDateChange.bind(this) } onSubmitHandler = { this.handleSubmit.bind(this) } defaultCurrency = { this.state.selectedCurrency } defaultDate = { this.state.selectedDate } />);

			if(this.state.drawCurrencyTable) {

				let currencyRatesArray = [];
				for(let prop in this.state.currencyRates.rates) {

					let currencyObject = { xValue: prop, yValue: this.state.currencyRates.rates[prop] }
					currencyRatesArray.push(currencyObject);
				}

				pageContents.push(<Chart key = { 1 } type = {"bar"} width = {1024} height = {500} margin = {{ top: 40, right: 40, bottom: 40, left: 40 }} showTooltips = {true} data = {currencyRatesArray} />);
			}
		}

		return (
			<div className = "currency_content_container">
				<Header headerClassName = { "page_header" } headerText = { "Welcome to the Enhanced Currency rates page!" } />
				{ pageContents }
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
		getCurrencyNames,
		getCurrencyRates,
		updateSelectedCurrency,
		updateSelectedDate,
		updateSecondaryCurrency,
		drawLoadingImage
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedCurrencyRatesPage);
