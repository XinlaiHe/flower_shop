"use strict";

import React from "react";
import UserBar from "../../account/components/userBar.jsx";
import Modal from "../components/modal.jsx";
import InputField from "../components/inputField.jsx";
import Control from "../components/control.jsx";
import Link from "../components/link.jsx";
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
					let content;

					if (this.props.userTryLogin) {
						content = <div className="form login-form">
									<InputField name="Username" required="true"/>
									<InputField name="Password" required="true"/>
									<Link action={this.props.tryResiter} text="No Account? Register"/>
									<Control action={this.props.login} text="Login"/>
									<Control action={this.props.cancel} text="Cancel"/>
								</div>

						return (
								<Modal content = {content}/>
						);
					} else if (this.props.userTryRegiser) {
						content = <div className="form register-form">
									<InputField name="Username" required="true"/>
									<InputField name="Password" required="true"/>
									<InputField name="Password-retype" required="true"/>
									<Link action={this.props.tryLogin} text="Have Account? Login"/>
									<Control action={this.props.register} text="Register"/>
									<Control action={this.props.cancel} text="Cancel"/>
								</div>

						return (
								<Modal content = {content}/>
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
