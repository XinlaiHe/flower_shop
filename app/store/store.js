"use strict";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import coreReducer from "./reducers/core.reducer";

export default createStore(coreReducer, applyMiddleware(thunk));
