import React from "react";

const CurrencyInput = ({currencies = [], onChangeHandler = () => {}}) => {

	let options = currencies.map((currency, iterator) => {
		return <option key = { iterator }> { currency } </option>;
	});
	return (
		<div className = "input_container">
			<label> Select Currency </label>
			<select className = "currency_select_input" onChange = { onChangeHandler }>
				{ options }
			</select>
		</div>
	);
}

export default CurrencyInput;