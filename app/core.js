"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import store from "./store/store";
import { Provider } from "react-redux";
import AppComponent from "./core/appComponent.jsx";
import HomePage from "./core/pages/homePage.jsx";
import ProductDetailPage from "./core/pages/productDetailPage.jsx";
import Core from "./core.scss";

ReactDOM.render((
	<Provider store={store}>
	<Router history={hashHistory}>
	<Route component={AppComponent}>
        <Route path="/" component={HomePage} />
        <Route path="/flowers/:id" component={ProductDetailPage} />
    </Route>
	</Router>
	</Provider>
	), document.getElementById("app"));
