"use strict";

import actionTypes from "./actionTypes";
import flowers from "../../mock/flowers.js";

function setProducts(products) {
	return { type: actionTypes.productsLoaded, products };
}

export function loadProducts() {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(setProducts(flowers));
		}, 2000);
	}
}
