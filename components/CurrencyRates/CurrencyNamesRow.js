import React from "react";

const CurrencyNamesRow = ({currencyNamesArray}) => {
	let tableCells = currencyNamesArray.map((value, iterator) => {
		return (<td key = { iterator }>
					<b>{ value }</b>
				</td>);
	});
	return(
		<tr className = "currency_names_row">
			{ tableCells }
		</tr>
	);
}

export default CurrencyNamesRow;