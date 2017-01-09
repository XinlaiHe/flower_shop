"use strict";

import actionTypes from "../actions/actionTypes";

const initialState = { username: undefined, userTryLogin: false, userTryRegiser: false };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.userLogin:
      return Object.assign({}, state, {
        username: action.username,
        userTryLogin: false, 
        userTryRegiser: false
      })
    case actionTypes.userLogout:
      return Object.assign({}, state, initialState)
    case actionTypes.userRegister:
      return Object.assign({}, state, {
        username: action.username,
        userTryLogin: false, 
        userTryRegiser: false
      })
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
