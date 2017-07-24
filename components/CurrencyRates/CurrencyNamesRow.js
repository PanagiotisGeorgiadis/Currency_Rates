import React from "react";
import { Link } from "react-router-dom";

const CurrencyNamesRow = ({currencyNamesArray, currencyNamesRowClickHandler}) => {
	let tableCells = currencyNamesArray.map((value, iterator) => {
		return (
			<td className = "currency_names_cell" key = { iterator } >
				<Link to = { "/currency/" + value } onClick = { currencyNamesRowClickHandler } >
					{ value }
				</Link>
			</td>
		);
	});
	return(
		<tr className = "currency_names_row">
			{ tableCells }
		</tr>
	);
}

export default CurrencyNamesRow;