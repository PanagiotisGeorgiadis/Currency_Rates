import React from "react";

import { Link } from "react-router-dom";

const NavigationOption = ({navigationLink = "/", navigationText = ""}) => {

	return (
		<div className = "navigation_option">
			<Link to = { navigationLink } >
				{ navigationText }
			</Link>
		</div>
	);
}

export default NavigationOption;