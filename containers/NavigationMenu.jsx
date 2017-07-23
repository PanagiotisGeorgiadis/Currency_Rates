import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import NavigationOption from "../components/NavigationOption"

class NavigationMenu extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentWillReceiveProps(nextProps) {

		this.setState({
			...nextProps
		});
	}

	componentWillMount() {

		this.setState({
			...this.props
		});
	}

	render() {

		return (
			<div className = "navigation_container">
				<NavigationOption navigationLink = "/" navigationText = "Home" />
				<NavigationOption navigationLink = "/rates" navigationText = "Currency Rates" />
				<NavigationOption navigationLink = "/about" navigationText = "About" />
			</div>
		);
	}
}

const mapStateToProps = ({}) => {

	return {
	}
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu);
