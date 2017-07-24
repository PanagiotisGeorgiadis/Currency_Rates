import React from "react";

import DateInput from "./DateInput";
import SubmitButton from "./SubmitButton";
import CurrencyInput from "./CurrencyInput";

const CurrencyInputContainer = ({currencyNames, onDateChangeHandler, onCurrencyChangeHandler, onSubmitHandler, defaultCurrency, defaultDate}) => {

	return (
		<div className = "currency_input_container">
			<CurrencyInput currencyNames = { currencyNames } onChangeHandler = { onCurrencyChangeHandler } defaultCurrencyValue = { defaultCurrency } />
			<DateInput onChangeHandler = { onDateChangeHandler } defaultDateValue = { defaultDate } />
			<SubmitButton onClickHandler = { onSubmitHandler } />
		</div>
	);
}

export default CurrencyInputContainer;