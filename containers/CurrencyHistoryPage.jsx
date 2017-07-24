import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "../components/Generic/Header";
import LoadingImage from "../components/Generic/LoadingImage";
import ErrorMessage from "../components/Generic/ErrorMessage";

import { drawLoadingImage, hideLoadingImage } from "../actions/CurrencyRatesActions";
import { getLastYearCurrencyRange } from "../actions/CurrencyHistoryActions";

class CurrencyHistoryPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			yearlyRatesArray: []
		};
	}

	componentWillReceiveProps(nextProps) {

		if(nextProps.yearlyRatesArrayFetchFinished)
			this.state.hideLoadingImage();

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

			pageContents.push(<LoadingImage key = { 0 } />);
		} else {

			pageContents.push(<h1 key = { 0 } >{ "DRAW THE FUCKING GRAPH" }</h1>);
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
		drawLineChart: CurrencyHistoryReducer.drawLineChart,
	}
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		getLastYearCurrencyRange,
		drawLoadingImage,
		hideLoadingImage
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyHistoryPage);
