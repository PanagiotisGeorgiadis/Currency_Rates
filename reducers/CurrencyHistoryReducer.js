import { GET_YEARLY_RATES_SUCCESS, GET_YEARLY_RATES_FAILURE, FORMAT_YEARLY_ARRAY } from "../actions/CurrencyHistoryActions";

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

		case FORMAT_YEARLY_ARRAY:

			updatedState.lineChartData = [];

			for(var i = 0; i < updatedState.yearlyRatesArray.length; i++) {

				var lineChartItem = { date: updatedState.yearlyRatesArray[i].date, ...updatedState.yearlyRatesArray[i].rates }
				updatedState.lineChartData.push(lineChartItem);
			}
			break;
	}

	return updatedState;
}