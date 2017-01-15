"use strict";

import React from "react";
import { hashHistory } from 'react-router';

class Product extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="product" onClick={this.redirect.bind(this)}>
                <span className="product_name">{this.props.name}</span>
				<image className="product_image" src={this.props.image} alt="Loading"/>
				<span className="product_price">{this.props.price}</span>
			</div>
			)
	}

	redirect() {
		hashHistory.push("/flowers/" + this.props.name);
	}
}

export default Product;
