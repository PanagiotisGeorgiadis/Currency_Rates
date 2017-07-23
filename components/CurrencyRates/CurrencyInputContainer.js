import React from "react";

import DateInput from "./DateInput";
import SubmitButton from "./SubmitButton";
import CurrencyInput from "./CurrencyInput";

const CurrencyInputContainer = ({currencyNames, onDateChangeHandler, onCurrencyChangeHandler, onSubmitHandler}) => {

	return (
		<div className = "currency_input_container">			
			<CurrencyInput currencies = { currencyNames } onChangeHandler = { onCurrencyChangeHandler } />
			<DateInput onChangeHandler = { onDateChangeHandler } />
			<SubmitButton onClickHandler = { onSubmitHandler } />
		</div>
	);
}

export default CurrencyInputContainer;