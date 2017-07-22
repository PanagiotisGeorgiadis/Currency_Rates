import React from "react";

const Header = ({headerClassName = "", headerStyle = {}, headerText = ""}) => {

	return (
		<h2 className = { headerClassName } style = { headerStyle }>
			{ headerText }
		</h2>
	);
}

export default Header;