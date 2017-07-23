import React from "react";
import { Link } from "react-router-dom";

const LandingPageContentOption = ({navigationLink = "/", imageSource = "", optionText = ""}) => {

	return (
		<div className = "content_options">
			<Link to = { navigationLink } >
				<img src = { imageSource } />
				<h4> { optionText } </h4>
			</Link>
		</div>
		
	);
}

export default LandingPageContentOption;