import React from "react";

import CurrencyRatesRow from "./CurrencyRatesRow";
import CurrencyNamesRow from "./CurrencyNamesRow";

const currenciesPerRow = 11;

const renderCurrencyTableRows = (currencyRates, currencyNamesRowClickHandler) => {

	let rowsIterator = 0;
	let currenciesIterator = 0;
	let currencyRatesArray = [];
	let currencyNamesArray = [];

	let currencyTableRows = [];

	for(var prop in currencyRates) {

		currencyRatesArray.push(currencyRates[prop]);
		currencyNamesArray.push(prop);
		currenciesIterator++;

		if(currenciesIterator > 0 && currenciesIterator % currenciesPerRow === 0) {

			currencyTableRows.push(<CurrencyRatesRow key = { rowsIterator++ } currencyRatesArray = { currencyRatesArray } />);
			currencyTableRows.push(<CurrencyNamesRow key = { rowsIterator++ } currencyNamesArray = { currencyNamesArray } currencyNamesRowClickHandler = { currencyNamesRowClickHandler } />);
			currencyRatesArray = [];
			currencyNamesArray = [];
		}
	}

	if(currencyRatesArray.length)
		currencyTableRows.push(<CurrencyRatesRow key = { rowsIterator++ } currencyRatesArray = { currencyRatesArray } />);

	if(currencyNamesArray.length)
		currencyTableRows.push(<CurrencyNamesRow key = { rowsIterator++ } currencyNamesArray = { currencyNamesArray } currencyNamesRowClickHandler = { currencyNamesRowClickHandler } />);

	return currencyTableRows;
}

const CurrencyTable = ({currencyRates, currencyNamesRowClickHandler}) => {

	let currencyTableRows = renderCurrencyTableRows(currencyRates, currencyNamesRowClickHandler);
	
	return (
		<div className = "currency_table_container">
			<table className = "currency_table">
				<tbody>
					{ currencyTableRows }
				</tbody>
			</table>
		</div>
	);
}

export default CurrencyTable;