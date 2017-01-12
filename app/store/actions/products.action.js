"use strict";

import actionTypes from "./actionTypes";

function setProducts(products) {
	return { type: actionTypes.productsLoaded, products };
}

export function loadProducts() {
	return (dispatch) => {
		setTimeout(() => {
			let products = [];

			dispatch(setProducts(products));
		}, 2000);
	}
}
