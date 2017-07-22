const defaultCurrencyRatesAppState = {
	showLoadingImage: true,
	errorMessage: null,
	currencyRates: {},
}

const initialState = {
	LandingPageReducer: {
		...defaultCurrencyRatesAppState
	}
};

export default initialState;