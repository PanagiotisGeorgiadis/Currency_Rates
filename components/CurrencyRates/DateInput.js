import React from "react";

const DateInput = ({minDate, maxDate, defaultDateValue}) => {

	return (
		<input type = "date" name = "date_selector" min = { minDate } max = { maxDate } defaultValue = { defaultDateValue } />
	);
}

export default DateInput;