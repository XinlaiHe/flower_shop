"use strict";

import actionTypes from "../actions/actionTypes";

const initialState = { userId: undefined, username: undefined, userTryLogin: false, userTryRegiser: false };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.userLogin:
      return Object.assign({}, state, {
        userId: action.userId,
        username: action.username
      })
    case actionTypes.userLogout:
      return Object.assign({}, state, initialState)
    case actionTypes.userTryToLogin:
      return Object.assign({}, state, { userTryLogin: true, userTryRegiser: false })
    case actionTypes.userTryToRegister:
      return Object.assign({}, state, { userTryLogin: false, userTryRegiser: true })
    case actionTypes.cancel:
      return Object.assign({}, state, { userTryLogin: false, userTryRegiser: false })
    default:
      return state
  }
};
