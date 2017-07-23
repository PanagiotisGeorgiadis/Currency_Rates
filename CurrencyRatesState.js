const defaultCurrencyRatesAppState = {
	showLoadingImage: true,
	showErrorMessage: false,
	errorMessage: null,
	currencyRates: {},
	currencyNames: [],
	selectedDate: "",
	selectedCurrency: ""
}

const initialState = {
	CurrencyRatesReducer: {
		...defaultCurrencyRatesAppState
	}
};

export default initialState;