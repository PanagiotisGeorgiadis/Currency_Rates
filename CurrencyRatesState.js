let today = new Date();
let date = today.getDate();
let month = ( today.getMonth() + 1 < 10 ) ? "0" + ( today.getMonth() + 1 ) : today.getMonth() + 1;
let year = today.getFullYear();

const defaultCurrencyRatesAppState = {
	showLoadingImage: true,
	showErrorMessage: false,
	errorMessage: null,
	currencyRates: {},
	currencyNames: [],
	selectedDate: year + "-" + month + "-" + date,
	selectedCurrency: "",
	drawCurrencyTable: false,
}

const initialState = {
	CurrencyRatesReducer: {
		...defaultCurrencyRatesAppState
	}
};

export default initialState;