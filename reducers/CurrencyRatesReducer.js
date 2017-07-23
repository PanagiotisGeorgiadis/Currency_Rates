import { DRAW_LOADING_IMAGE, HIDE_LOADING_IMAGE,
		 DRAW_ERROR_MESSAGE, HIDE_ERROR_MESSAGE,
		 GET_CURRENCY_RATES_SUCCESS, GET_CURRENCY_RATES_FAILURE,
		 DRAW_INITIAL_CURRENCY_RATES 
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

		case GET_CURRENCY_RATES_SUCCESS:

			if(action.payload.response.error) {

				updatedState.errorMessage = action.payload.response.error;

			} else {

				updatedState.showLoadingImage = false;
				updatedState.currencyRates = action.payload.response;

				updatedState.currencyNames = [];
				for(var props in updatedState.currencyRates.rates) {
					updatedState.currencyNames.push(props);
				}
				updatedState.selectedCurrency = updatedState.currencyNames[0];
			}
			break;

		case GET_CURRENCY_RATES_FAILURE:

			updatedState.errorMessage = action.payload.error;
			updatedState.showLoadingImage = false;
			break;

		case DRAW_INITIAL_CURRENCY_RATES:

			break;
	}

	return updatedState;
}

