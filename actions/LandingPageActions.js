import APIManager from "../utils/APIManager";

export const DRAW_LOADING_IMAGE = "DRAW/LOADING_IMAGE";
export const HIDE_LOADING_IMAGE = "HIDE/LOADING_IMAGE";

export const DRAW_ERROR_MESSAGE = "DRAW/ERROR_MESSAGE";
export const HIDE_ERROR_MESSAGE = "HIDE/ERROR_MESSAGE";

export const GET_CURRENCY_RATES_SUCCESS = "GET/CURRENCY_RATES/SUCCESS";
export const GET_CURRENCY_RATES_FAILURE = "GET/CURRENCY_RATES/FAILURE";

export const DRAW_INITIAL_CURRENCY_RATES = "DRAW/CURRENCY_RATES/INITIAL";

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

export const drawInitialCurrencyRates = () => ({
	type: DRAW_INITIAL_CURRENCY_RATES,
	payload: {
		numOfHotels
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

