import React from "react";

const CurrencyInput = ({currencyNames = [], onChangeHandler = () => {}, defaultCurrencyValue}) => {

	let options = currencyNames.map((currency, iterator) => {
		return <option key = { iterator } value = { currency } > { currency } </option>;
	});
	return (
		<div className = "input_container">
			<label> Select Currency </label>
			<select className = "currency_select_input" onChange = { onChangeHandler } defaultValue = { defaultCurrencyValue } >
				{ options }
			</select>
		</div>
	);
}

export default CurrencyInput;