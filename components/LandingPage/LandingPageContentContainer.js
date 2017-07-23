import React from "react";

import LandingPageContentOption from "./LandingPageContentOption";

const LandingPageContentContainer = () => {

	return (
		<div className = "content_container">
			<LandingPageContentOption navigationLink = "/plain_rates" imageSource = "https://iccssciencefair.wikispaces.com/file/view/Data-Table_-_Example.jpg/268847690/800x330/Data-Table_-_Example.jpg" optionText = "Plain Currency Rates" />
			<LandingPageContentOption navigationLink = "/enhanced_rates" imageSource = "http://blog.boxofbolts.com/assets/images/working-with-graph-data-structures-dot-net/some-chart.png" optionText = "Enhanced Currency Rates" />
		</div>
	);
}

export default LandingPageContentContainer;
