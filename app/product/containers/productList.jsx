"use strict";

import React from "react";
import Modal from "../../core/components/modal.jsx";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productsActions from "../../store/actions/products.action";

class ProductList extends React.Component{

	constructor(props) {
		super(props);
		this.props.loadProducts();
	}

	render() {
		let loader = <div className="loader"></div>;

		return (
			<div className="product-list">
                {(() => {
					if (this.props.loading) {
						return <Modal content={loader} />
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
