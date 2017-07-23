import React from "react";

const SubmitButton = ({onClickHandler}) => {

	return(
		<button className = "submit_button" onClick = { onClickHandler }>
			Submit
		</button>	
	);
}

export default SubmitButton;