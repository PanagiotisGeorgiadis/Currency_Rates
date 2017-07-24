import APIManager from "../utils/APIManager";

export const DRAW_LOADING_IMAGE = "DRAW/LOADING_IMAGE";
export const HIDE_LOADING_IMAGE = "HIDE/LOADING_IMAGE";

export const DRAW_ERROR_MESSAGE = "DRAW/ERROR_MESSAGE";
export const HIDE_ERROR_MESSAGE = "HIDE/ERROR_MESSAGE";

export const GET_CURRENCY_NAMES_SUCCESS = "GET/CURRENCY_NAMES/SUCCESS";
export const GET_CURRENCY_NAMES_FAILURE = "GET/CURRENCY_NAMES/FAILURE";

export const GET_CURRENCY_RATES_SUCCESS = "GET/CURRENCY_RATES/SUCCESS";
export const GET_CURRENCY_RATES_FAILURE = "GET/CURRENCY_RATES/FAILURE";

export const UPDATE_SELECTED_DATE = "UPDATE/SELECTED/DATE";
export const UPDATE_SELECTED_CURRENCY = "UPDATE/SELECTED/CURRENCY";
export const UPDATE_SECONDARY_CURRENCY = "UPDATE/SECONDARY/CURRENCY";

export const getCurrencyNames = (url = "http://api.fixer.io/latest") => {

	return (dispatch) => {
		APIManager.fetchDataBlocking(url)
			.then((response) => {
				dispatch(fetchOperationSuccess(response, GET_CURRENCY_NAMES_SUCCESS));
				dispatch(hideLoadingImage());
			})
			.catch((response) => {
				dispatch(fetchOperationFailed(response, GET_CURRENCY_NAMES_FAILURE))
				dispatch(hideLoadingImage());
				dispatch(showErrorMessage());
			});
	};
};

export const getCurrencyRates = (url = "http://api.fixer.io/latest") => {

	return (dispatch) => {
		APIManager.fetchDataBlocking(url)
			.then((response) => {
				dispatch(fetchOperationSuccess(response, GET_CURRENCY_RATES_SUCCESS));
				dispatch(hideLoadingImage());
			})
			.catch((response) => {
				dispatch(fetchOperationFailed(response, GET_CURRENCY_RATES_FAILURE))
				dispatch(hideLoadingImage());
				dispatch(showErrorMessage());
			});
	};
};

export const drawLoadingImage = () => ({
	type: DRAW_LOADING_IMAGE,
	payload: {}
});

export const hideLoadingImage = () => ({
	type: HIDE_LOADING_IMAGE,
	payload: {}
});

export const showErrorMessage = (message = "") => ({
	type: DRAW_ERROR_MESSAGE,
	payload: {
		message
	}
});

export const hideErrorMessage = () => ({
	type: HIDE_ERROR_MESSAGE,
	payload: {}
});

export const updateSelectedCurrency = (selectedCurrency) => ({
	type: UPDATE_SELECTED_CURRENCY,
	payload: {
		selectedCurrency
	}
});

export const updateSelectedDate = (selectedDate) => ({
	type: UPDATE_SELECTED_DATE,
	payload: {
		selectedDate
	}
});

export const updateSecondaryCurrency = (secondaryCurrency) => ({
	type: UPDATE_SECONDARY_CURRENCY,
	payload: {
		secondaryCurrency
	}
});

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

