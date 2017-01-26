"use strict";

import React from "react";
import Modal from "../../core/components/modal.jsx";
import Detail from "../components/detail.jsx";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as detailActions from "../../store/actions/detail.action";

class ProductDetail extends React.Component{

	constructor(props) {
		super(props);
		this.props.loadDetails(this.props.id);
	}

	render() {
		return (
			<div className="product-detail">
                {(() => {
					if (this.props.loading) {
						const loader = <div className="loader"></div>;

						return <Modal content={loader} />
					} else {
						const detail = <Detail {...this.props.detail}/>;

						return detail;
					}
				})()}
			</div>
			)
	}
}

const mapStateToProps = (state) => {
	return state.productDetail;
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(detailActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

