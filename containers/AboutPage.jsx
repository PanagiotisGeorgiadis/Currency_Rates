import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import Header from "../components/Generic/Header";

class AboutPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedHotel: null
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
			<div className = "about_page_container">
				<Header headerStyle = {{ textAlign: "center" }} headerText = { "Welcome to the About Page." } />
			</div>
		);
	}
}

const mapStateToProps = ({HotelPageReducer}) => {

	return {
	}
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
