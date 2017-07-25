import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "../components/Generic/Header";
import LoadingImage from "../components/Generic/LoadingImage";
import ErrorMessage from "../components/Generic/ErrorMessage";

import { drawLoadingImage, hideLoadingImage } from "../actions/CurrencyRatesActions";
import { getLastYearCurrencyRange, formatYearlyArray } from "../actions/CurrencyHistoryActions";

import ChartUtils from "../utils/ChartUtils";

class CurrencyHistoryPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			yearlyRatesArray: [],
		};
	}

	componentDidUpdate() {

		if(this.state.yearlyRatesArrayFetchFinished && this.state.lineChartData.length)
			ChartUtils.lineChart(this.state.lineChartData, this.state.secondaryCurrency);
	}

	componentWillReceiveProps(nextProps) {

		if(nextProps.yearlyRatesArrayFetchFinished && !nextProps.lineChartData.length) {
			this.state.formatYearlyArray();
			this.state.hideLoadingImage();
		}

		this.setState({
			...nextProps
		});
	}

	componentWillMount() {

		this.props.drawLoadingImage();
		if(this.props.selectedCurrency && this.props.secondaryCurrency)
			this.props.getLastYearCurrencyRange(this.props.selectedCurrency, this.props.secondaryCurrency);

		this.setState({
			...this.props
		});
	}

	render() {

		if(!this.state.selectedCurrency || !this.state.selectedDate || !this.state.secondaryCurrency) {
			return (
				<div className = "currency_content_container">
					<Header headerClassName = { "page_header" } headerText = { "Welcome to the currency history page!" } />
					<ErrorMessage errorMessageText = { "Some error occured. Please return to the homepage" } />
				</div>
			);
		}

		let pageContents = [];
		if(this.state.showErrorMessage) {

			pageContents.push(<ErrorMessage key = { 0 } errorMessageText = { this.state.errorMessage } />);
		} else if(this.state.showLoadingImage) {

			pageContents.push(<p key = { 0 }> { "Tip: Grab a coffee until the loading finishes" }</p>);
			pageContents.push(<LoadingImage key = { 1 } />);
		} else {

			pageContents.push(<p key = { 0 }>{ "Yearly Rates Chart for the price of 1 " + this.state.selectedCurrency + " compared to " + this.state.secondaryCurrency}</p>);
			pageContents.push(<svg key = { 1 } className = "line_chart" width = "980" height = "500"></svg>);
		}

		return (
			<div className = "currency_content_container">
				<Header headerClassName = { "page_header" } headerText = { "Welcome to the currency history page!" } />
				{ pageContents }
			</div>
		);
	}
}

const mapStateToProps = ({CurrencyRatesReducer, CurrencyHistoryReducer}) => {

	return {
		...CurrencyRatesReducer,
		yearlyRatesArray: CurrencyHistoryReducer.yearlyRatesArray,
		yearlyRatesArrayFetchFinished: CurrencyHistoryReducer.yearlyRatesArrayFetchFinished,
		lineChartData: CurrencyHistoryReducer.lineChartData,
	}
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		getLastYearCurrencyRange,
		drawLoadingImage,
		hideLoadingImage,
		formatYearlyArray
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyHistoryPage);
