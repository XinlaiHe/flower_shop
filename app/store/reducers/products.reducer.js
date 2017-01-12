"use strict";

import actionTypes from "../actions/actionTypes";

const initialState = { products: [], loading: true };

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.productsLoaded:
      return Object.assign({}, state, {
        products: action.products,
        loading: false
      })
    default:
      return state
  }
};
