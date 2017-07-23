import React from "react";

const CurrencyInput = ({currencies}) => {

	let options = currencies.map((currency, iterator) => {
		return <option key = { iterator }> { currency } </option>;
	});
	return (
		<select>
			{ options }
		</select>
	);
}

export default CurrencyInput;