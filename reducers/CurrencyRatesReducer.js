import { DRAW_LOADING_IMAGE, HIDE_LOADING_IMAGE,
		 DRAW_ERROR_MESSAGE, HIDE_ERROR_MESSAGE,
		 GET_CURRENCY_NAMES_SUCCESS, GET_CURRENCY_NAMES_FAILURE,
		 GET_CURRENCY_RATES_SUCCESS, GET_CURRENCY_RATES_FAILURE,
		 UPDATE_SELECTED_DATE, UPDATE_SELECTED_CURRENCY, UPDATE_SECONDARY_CURRENCY,
		} from "../actions/CurrencyRatesActions";

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

		case DRAW_LOADING_IMAGE:
			updatedState.showLoadingImage = true;
			break;

		case HIDE_LOADING_IMAGE:
			updatedState.showLoadingImage = false;
			break;

		case DRAW_ERROR_MESSAGE:
			updatedState.showErrorMessage = true;
			updatedState.errorMessage = action.payload.message;
			break;

		case HIDE_ERROR_MESSAGE:
			updatedState.showErrorMessage = false;
			updatedState.errorMessage = null;
			break;

		case GET_CURRENCY_NAMES_SUCCESS:

			updatedState.showLoadingImage = false;
			if(action.payload.response.error) {

				updatedState.showErrorMessage = true;
				updatedState.errorMessage = action.payload.response.error;
			} else {

				updatedState.currencyNames = [];
				updatedState.currencyNames.push(action.payload.response.base);

				for(var props in action.payload.response.rates) {
					updatedState.currencyNames.push(props);
				}
				updatedState.selectedCurrency = updatedState.currencyNames[0];
			}
			break;

		case GET_CURRENCY_NAMES_FAILURE:
			updatedState.errorMessage = action.payload.error;
			updatedState.showLoadingImage = false;
			break;

		case GET_CURRENCY_RATES_SUCCESS:

			updatedState.showLoadingImage = false;
			if(action.payload.response.error) {

				updatedState.showErrorMessage = true;
				updatedState.errorMessage = action.payload.response.error;
			} else {

				updatedState.currencyRates = action.payload.response;
				updatedState.drawCurrencyTable = true;
			}
			break;

		case GET_CURRENCY_RATES_FAILURE:

			updatedState.errorMessage = action.payload.error;
			updatedState.showLoadingImage = false;
			break;

		case UPDATE_SELECTED_CURRENCY:
			updatedState.selectedCurrency = action.payload.selectedCurrency;
			break;

		case UPDATE_SELECTED_DATE:
			updatedState.selectedDate = action.payload.selectedDate;
			break;

		case UPDATE_SECONDARY_CURRENCY:
			updatedState.secondaryCurrency = action.payload.secondaryCurrency;
			break;

	}

	return updatedState;
}

