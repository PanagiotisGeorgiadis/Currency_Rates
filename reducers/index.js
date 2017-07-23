import { combineReducers } from "redux";

import LandingPageReducer from "./LandingPageReducer";
import CurrencyRatesReducer from "./CurrencyRatesReducer";

const rootReducer = combineReducers({
	LandingPageReducer,
	CurrencyRatesReducer
});


export default rootReducer;
