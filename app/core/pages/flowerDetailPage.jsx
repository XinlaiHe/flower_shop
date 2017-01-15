"use strict";

import React from "react";
import Navigation from "../containers/navigation.jsx";
import Footer from "../containers/footer.jsx";

class FlowerComponent extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="content">
                <Navigation />
                {this.props.params.id}
                <Footer />
			</div>
			)
	}
}

export default FlowerComponent;
