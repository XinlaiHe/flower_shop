"use strict";

import React from 'react';
import Navigation from "./navigation.jsx";
import Footer from "./footer.jsx";

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
