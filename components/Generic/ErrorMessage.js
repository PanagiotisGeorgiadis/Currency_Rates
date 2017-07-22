import React from "react";

const ErrorMessage = ({ errorMessageText }) => {
	return (
		<div className = "error_message_container"> { errorMessageText } </div>
	);
};

export default ErrorMessage;