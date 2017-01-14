"use strict";

import React from "react";

class Product extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="product">
                <span className="product_name">{this.props.name}</span>
				<image className="product_image" src={this.props.image} alt="Loading"/>
				<span className="product_price">{this.props.price}</span>
			</div>
			)
	}
}

export default Product;
