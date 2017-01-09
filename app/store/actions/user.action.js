"use strict";

import actionTypes from "./actionTypes";

export function login(username, password) {
    return { type: actionTypes.userLogin, username: username, password: password };
}

export function logout() {
    return { type: actionTypes.userLogout };
}

export function register(username, password) {
    return { type: actionTypes.userRegister, username: username, password: password };
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