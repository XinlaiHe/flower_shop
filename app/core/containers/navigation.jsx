"use strict";

import React from "react";
import UserBar from "../../account/components/userBar.jsx";
import Form from "../components/form.jsx";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from "../../store/actions/user.action";

class Navigation extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="navigation">
				<h1 className="navigation_header">Flower Shop</h1>
                <UserBar {...this.props}/>
				{(() => {
					if (this.props.userTryLogin) {
					return (
								<Form formType="login-form" formFields={["username", "password"]}/>
							);
					}
				})()}
				{(() => {
					if (this.props.userTryRegiser) {
					return (
								<Form formType="register-form" formFields={["username", "password", "password-retype"]}/>
							);
					}
				})()}
			</div>
			)
	}
}

const mapStateToProps = (state) => {
	return state.userInfo;
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(userActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
