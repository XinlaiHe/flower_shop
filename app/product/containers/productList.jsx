"use strict";

import React from "react";
import Modal from "../../core/components/modal.jsx";
import Product from "../components/product.jsx";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productsActions from "../../store/actions/products.action";

class ProductList extends React.Component{

	constructor(props) {
		super(props);
		this.props.loadProducts();
	}

	render() {
		return (
			<div className="product-list">
                {(() => {
					if (this.props.loading) {
						const loader = <div className="loader"></div>;

						return <Modal content={loader} />
					} else {
						const products = this.props.products.map((product) => <Product key={product.name} {...product} />);

						return products;
					}
				})()}
			</div>
			)
	}
}

const mapStateToProps = (state) => {
	return state.productsInfo;
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(productsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
