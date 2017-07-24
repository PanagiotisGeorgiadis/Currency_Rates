import { GET_YEARLY_RATES_SUCCESS, GET_YEARLY_RATES_FAILURE } from "../actions/CurrencyHistoryActions";

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

		case GET_YEARLY_RATES_SUCCESS:

			updatedState.yearlyRatesArray.push(action.payload.response);

			if(updatedState.yearlyRatesArray.length === 365)
				updatedState.yearlyRatesArrayFetchFinished = true;

			break;

		case GET_YEARLY_RATES_FAILURE:
			updatedState.errorMessage = action.payload.error;
			updatedState.showLoadingImage = false;
			break;
	}

	return updatedState;
}