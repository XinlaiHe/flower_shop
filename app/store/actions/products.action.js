"use strict";

import actionTypes from "./actionTypes";

function setProducts(products) {
	return { type: actionTypes.productsLoaded, products };
}

export function loadProducts() {
	return (dispatch) => {
		setTimeout(() => {
			let products = [
				{ name: "Jasmine Santa", price: "￥1999", image: "flowers/jasmine" },
				{ name: "Rose Santa", price: "￥999", image: "flowers/rose" },
				{ name: "Lavanda Santa", price: "￥1299", image: "flowers/lavanda" },
				{ name: "Jasmine Festive", price: "￥1999", image: "flowers/jasmine" },
				{ name: "Rose Festive", price: "￥999", image: "flowers/rose" },
				{ name: "Lavanda Festive", price: "￥1299", image: "flowers/lavanda" }
			];

			dispatch(setProducts(products));
		}, 2000);
	}
}
