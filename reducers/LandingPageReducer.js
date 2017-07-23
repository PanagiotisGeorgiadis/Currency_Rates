import { DRAW_LOADING_IMAGE, HIDE_LOADING_IMAGE,
		 DRAW_ERROR_MESSAGE, HIDE_ERROR_MESSAGE,
		 GET_CURRENCY_RATES_SUCCESS, GET_CURRENCY_RATES_FAILURE,
		 DRAW_INITIAL_CURRENCY_RATES 
		} from "../actions/LandingPageActions";

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

	}

	return updatedState;
}

