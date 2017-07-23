import React from "react";

let today = new Date();
let date = today.getDate();
let month = ( today.getMonth() + 1 < 10 ) ? "0" + ( today.getMonth() + 1 ) : today.getMonth() + 1;
let year = today.getFullYear();
let defaultMinDate = "1999-01-01";
let defaultMaxDate = year + "-" + month + "-" + date;

const DateInput = ({minDate = defaultMinDate, maxDate = defaultMaxDate, defaultDateValue = defaultMaxDate, labelText = "Select Date", onChangeHandler = () => {}}) => {
	return (
		<div className = "input_container">
			<label> { labelText } </label>
			<input className = "currency_date_input" type = "date" name = "date_selector" min = { minDate } max = { maxDate } defaultValue = { defaultDateValue } onChange = { onChangeHandler }/>
		</div>
	);
}

export default DateInput;