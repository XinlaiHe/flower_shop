"use strict";

import actionTypes from "./actionTypes";

export function login(userId, username) {
    return { type: actionTypes.userLogin, userId: userId, username: username };
}

export function logout() {
    return { type: actionTypes.userLogout };
}
