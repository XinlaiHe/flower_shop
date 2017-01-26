"use strict";

import React from "react";
import Product from "./product.jsx";

class Detail extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const products = this.props.recommendations.map((product) => <Product key={product.id} {...product}/>);

		return (
			<div className="detail">
				<div className="detail_image-container">
                	<img className="detail_image" src={this.props.image}/>
                </div>
                <div className="detail_description-container">
                	<h2 className="detail_title">{this.props.name}</h2>
                	<p className="detail_description">{this.props.description}</p>
                </div>
                <div className="detail_recommendation-container">
                	{products}
                </div>
			</div>
			)
	}
}

export default Detail;
