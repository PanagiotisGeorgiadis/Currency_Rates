import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCurrencyNames, getCurrencyRates, drawLoadingImage,
		updateSelectedCurrency, updateSelectedDate,
		updateSecondaryCurrency } from "../actions/CurrencyRatesActions";

import Header from "../components/Generic/Header";
import LoadingImage from "../components/Generic/LoadingImage";
import ErrorMessage from "../components/Generic/ErrorMessage";

import CurrencyTable from "../components/CurrencyRates/CurrencyTable";
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

		this.props.getCurrencyNames();
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

		if(this.state.selectedDate && this.state.selectedCurrency) {

			var url = "http://api.fixer.io/" + this.state.selectedDate + "?base=" + this.state.selectedCurrency;
			this.state.drawLoadingImage();
			this.state.updateSelectedCurrency(this.state.selectedCurrency);
			this.state.updateSelectedDate(this.state.selectedDate);

			this.state.getCurrencyRates(url);
		}
	}

	handleCurrencyClick(event) {

		if(this.state.selectedDate && this.state.selectedCurrency)
			this.state.updateSecondaryCurrency(event.target.innerHTML);
	}

	render() {

		let pageContents = [];
		if(this.state.showErrorMessage) {

			pageContents.push(<ErrorMessage key = { 0 } errorMessageText = { this.state.errorMessage } />);
		} else if(this.state.showLoadingImage) {

			pageContents.push(<LoadingImage key = { 0 } />);
		} else {

			pageContents.push(<CurrencyInputContainer key = { 0 } onCurrencyChangeHandler = { this.handleCurrencyChange.bind(this) } currencyNames = { this.state.currencyNames } onDateChangeHandler = { this.handleDateChange.bind(this) } onSubmitHandler = { this.handleSubmit.bind(this) } />);

			if(this.state.drawCurrencyTable)
				pageContents.push(<CurrencyTable key = { 1 } currencyRates = { this.state.currencyRates.rates } currencyNamesRowClickHandler = { this.handleCurrencyClick.bind(this) } />);
		}

		return (
			<div className = "currency_content_container">
				<Header headerClassName = { "page_header" } headerText = { "Welcome to the plain currency rates page!" } />
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

export default connect(mapStateToProps, mapDispatchToProps)(PlainCurrencyRatesPage);
