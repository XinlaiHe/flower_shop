"use strict";

import React from "react";
import UserBar from "../../account/components/userBar.jsx";
import Form from "../components/form.jsx";
import Modal from "../components/modal.jsx";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from "../../store/actions/user.action";

class Navigation extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		let content;

		if (this.props.userTryLogin) {
			content = <Form formType="login-form" formFields={["username", "password"]} controls={["Login", "Cancel"]} Login={this.props.login} Cancel={this.props.cancel}/>
		} else if (this.props.userTryRegiser) {
			content = <Form formType="register-form" formFields={["username", "password", "password-retype"]} controls={["Register", "Cancel"]} Register={this.props.register} Cancel={this.props.cancel}/>
		}
		return (
			<div className="navigation">
				<h1 className="navigation_header">Flower Shop</h1>
                <UserBar {...this.props}/>
				{(() => {
					if (content) {
					return (
						<Modal content={content}/>	
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
