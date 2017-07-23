import React from "react";

const CurrencyRatesRow = ({currencyRatesArray}) => {
	let tableCells = currencyRatesArray.map((value, iterator) => {
		return <td key = { iterator }>{ value }</td>
	});
	return(
		<tr className = "currency_rates_row">
			{ tableCells }
		</tr>
	);
}

export default CurrencyRatesRow;