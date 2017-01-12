"use strict";

import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import productReducer from "./products.reducer";

const coreReducer = combineReducers({
    userInfo: userReducer,
    productsInfo: productReducer
})

export default coreReducer;
