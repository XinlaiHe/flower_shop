"use strict";

import actionTypes from "./actionTypes";

export function login(userId, username) {
    return { type: actionTypes.userLogin, userId: userId, username: username };
}

export function logout() {
    return { type: actionTypes.userLogout };
}

export function tryLogin() {
    return { type: actionTypes.userTryToLogin };
}

export function tryResiter() {
    return { type: actionTypes.userTryToRegister };
}

export function cancel() {
    return { type: actionTypes.cancel };
}