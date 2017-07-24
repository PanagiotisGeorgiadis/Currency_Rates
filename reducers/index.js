import { combineReducers } from "redux";

import CurrencyRatesReducer from "./CurrencyRatesReducer";
import CurrencyHistoryReducer from "./CurrencyHistoryReducer";

const rootReducer = combineReducers({
	CurrencyRatesReducer,
	CurrencyHistoryReducer
});


export default rootReducer;
