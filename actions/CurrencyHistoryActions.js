import APIManager from "../utils/APIManager";

import { DRAW_LOADING_IMAGE, HIDE_LOADING_IMAGE, DRAW_ERROR_MESSAGE, HIDE_ERROR_MESSAGE } from "./CurrencyRatesActions";

const SECOND_TIMESTAMP_STEP = 1000;
const MINUTE_TIMESTAMP_STEP = 1000 * 60;
const HOUR_TIMESTAMP_STEP = 1000 * 60 * 60;
const DAY_TIMESTAMP_STEP = 1000 * 60 * 60 * 24;
const YEAR_TIMESTAMP_STEP = 1000 * 60 * 60 * 24 * 365;

let LastYearDatesArray = [];

export const GET_YEARLY_RATES_SUCCESS = "GET/YEARLY/CURRENCY_RATES/SUCCESS";
export const GET_YEARLY_RATES_FAILURE = "GET/YEARLY/CURRENCY_RATES/FAILURE";


export const getYearlyRates = (url = "http://api.fixer.io/latest", timeoutValue = 0) => {
	return (dispatch) => {
		APIManager.fetchDataBlockingBatch(url, timeoutValue)
			.then((response) => {
				dispatch(fetchOperationSuccess(response, GET_YEARLY_RATES_SUCCESS));
			})
			.catch((response) => {
				dispatch(fetchOperationFailed(response, GET_YEARLY_RATES_FAILURE));
			});
	};
};

const updateLastYearArray = () => {

	var today = new Date();
	var todayTimestamp = today.getTime();
	var lastYearTimestamp = todayTimestamp - (YEAR_TIMESTAMP_STEP);

	for(var i = lastYearTimestamp; i < todayTimestamp; i += DAY_TIMESTAMP_STEP) {

		var targetDate = new Date(i);
		var targetYear = targetDate.getFullYear();
		var targetMonth = ( targetDate.getMonth() + 1 < 10 ) ? "0" + ( targetDate.getMonth() + 1 ) : targetDate.getMonth() + 1;
		var targetDay = ( targetDate.getDate() < 10 ) ? "0" + targetDate.getDate() : targetDate.getDate();

		LastYearDatesArray.push(targetYear + "-" + targetMonth + "-" + targetDay);
	}
};

export const getLastYearCurrencyRange = (baseCurrency = "EUR", symbolsArray = []) => {

	return (dispatch) => {

		var baseUrl = "http://api.fixer.io/";
		updateLastYearArray();
		
		for(var i = 0; i < LastYearDatesArray.length; i++) {

			var requestURL = baseUrl + LastYearDatesArray[i] + "?base=" + baseCurrency + "&symbols=" + symbolsArray.toString();
			dispatch(getYearlyRates(requestURL, parseInt(i * 100)));
		}	
	}
};

export const fetchOperationSuccess = (response, actionType) => ({
	type: actionType,
	payload: {
		response
	}
});

export const fetchOperationFailed = (response, actionType) => ({
	type: actionType,
	payload: {
		response
	}
});
