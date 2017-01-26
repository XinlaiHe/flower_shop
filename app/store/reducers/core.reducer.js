"use strict";

import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import productReducer from "./products.reducer";
import detailReducer from "./detail.reducer";

const coreReducer = combineReducers({
    userInfo: userReducer,
    productsInfo: productReducer,
    productDetail: detailReducer
})

export default coreReducer;
