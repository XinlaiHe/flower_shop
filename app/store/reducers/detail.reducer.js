"use strict";

import actionTypes from "../actions/actionTypes";

const initialState = { detail: undefined, loading: true };

export default function detailReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.detailLoaded:
      return Object.assign({}, state, {
        detail: action.detail,
        loading: false
      })
    case actionTypes.detailCleared:
    	return Object.assign({}, state, initialState)
    default:
      return state
  }
};
