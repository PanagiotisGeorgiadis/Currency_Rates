const defaultCurrencyRatesAppState = {
	showLoadingImage: true,
	errorMessage: null,
	currencyRates: {},
}

const initialState = {
	LandingPageReducer: {
		...defaultCurrencyRatesAppState
	},
	CurrencyRatesReducer: {
		...defaultCurrencyRatesAppState
	}
};

export default initialState;