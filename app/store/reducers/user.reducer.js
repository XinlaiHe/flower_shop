"use strict";

import actionTypes from "../actions/actionTypes";

const initialState = { userId: undefined, username: undefined };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.userLogin:
      return Object.assign({}, state, {
        userId: action.userId,
        username: action.username
      })
    case actionTypes.userLogout:
      return Object.assign({}, state, initialState)
    default:
      return state
  }
};
