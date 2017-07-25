import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "../components/Generic/Header";

class AboutPage extends Component {

	constructor(props) {
		super(props);
		this.state = {};
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
				<Header headerClassName = { "page_header" } headerText = { "Welcome to the About Page!" } />
				<p> 
					{ "Every about page contains useful information about the author. But in this case there will be much more than that! The next two paragraphs explain everything that you need to know and you might want to save them because they are the secret in order to become a Software Engineer!" }
				</p>
				<p> 
					{ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum elit risus, mollis ullamcorper leo eleifend a. Nam et lorem eget dui porttitor posuere. Vestibulum at augue eget nunc fermentum placerat vitae vitae urna. Nunc convallis vulputate euismod. Sed id iaculis nibh, sit amet maximus velit. Suspendisse scelerisque quam dui, ac mattis quam laoreet at. Morbi pulvinar, massa eget mollis tincidunt, justo eros sodales mi, sed molestie arcu erat non nisi. Vivamus convallis lacus et tempus congue. Nam pellentesque ante est, sit amet euismod est lobortis et. Suspendisse potenti." }
				</p>
				<p>
					{ "Ut tempus interdum dolor, consequat pretium ex porta vel. Morbi feugiat, neque in ullamcorper condimentum, erat tortor dignissim lorem, eget malesuada metus purus sed turpis. Maecenas nec dapibus sapien. Nulla turpis justo, semper nec purus vel, venenatis rhoncus est. Proin et euismod quam. Nulla pretium neque vitae velit iaculis, a eleifend nibh feugiat. Mauris tempus magna auctor libero egestas, sit amet elementum est imperdiet. Sed in congue diam. Pellentesque quis ex id nulla elementum venenatis non a dolor." }
				</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
