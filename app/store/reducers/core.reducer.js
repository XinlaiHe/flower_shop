"use strict";

import { combineReducers } from "redux";
import userReducer from "./user.reducer";

const coreReducer = combineReducers({
    userInfo: userReducer
})

export default coreReducer;
