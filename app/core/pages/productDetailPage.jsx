"use strict";

import React from "react";
import Navigation from "../containers/navigation.jsx";
import Footer from "../containers/footer.jsx";
import ProductDetail from "../../product/containers/productDetail.jsx";

class FlowerComponent extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="content">
                <Navigation />
                <ProductDetail id={this.props.params.id}/>
                <Footer />
			</div>
			)
	}
}

export default FlowerComponent;
