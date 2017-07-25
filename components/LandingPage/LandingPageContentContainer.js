import React from "react";

import LandingPageContentOption from "./LandingPageContentOption";

const LandingPageContentContainer = () => {

	return (
		<div className = "content_container">
			<LandingPageContentOption navigationLink = "/plain_rates" imageSource = "/images/plain_version.png" optionText = "Plain Currency Rates" />
			<LandingPageContentOption navigationLink = "/enhanced_rates" imageSource = "/images/enhanced_version.png" optionText = "Enhanced Currency Rates" />
		</div>
	);
}

export default LandingPageContentContainer;
