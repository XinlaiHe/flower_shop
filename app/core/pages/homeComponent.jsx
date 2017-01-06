"use strict";

import React from "react";
import Navigation from "../containers/navigation.jsx";
import Footer from "../containers/footer.jsx";

class HomeComponent extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="content">
                <Navigation />
                <Footer />
			</div>
			)
	}
}

export default HomeComponent;
