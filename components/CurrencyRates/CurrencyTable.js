import React from "react";

import CurrencyRatesRow from "./CurrencyRatesRow";
import CurrencyNamesRow from "./CurrencyNamesRow";

const currenciesPerRow = 11;

const renderCurrencyTableRows = (currencyRates) => {

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
			currencyTableRows.push(<CurrencyNamesRow key = { rowsIterator++ } currencyNamesArray = { currencyNamesArray } />);
			currencyRatesArray = [];
			currencyNamesArray = [];
		}
	}

	if(currencyRatesArray.length)
		currencyTableRows.push(<CurrencyRatesRow key = { rowsIterator++ } currencyRatesArray = { currencyRatesArray } />);

	if(currencyNamesArray.length)
		currencyTableRows.push(<CurrencyNamesRow key = { rowsIterator++ } currencyNamesArray = { currencyNamesArray } />);

	return currencyTableRows;
}

const CurrencyTable = ({currencyRates}) => {

	let currencyTableRows = renderCurrencyTableRows(currencyRates);
	
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

/*
<tr className = "currency_rates_row">
</tr>
<tr className = "currency_names_row">
</tr>
<tr className = "currency_rates_row">
</tr>
<tr className = "currency_names_row">
</tr>
<tr className = "currency_rates_row">
</tr>
<tr className = "currency_names_row">
</tr>
<tr className = "currency_rates_row">
</tr>
<tr className = "currency_names_row">
</tr>
*/