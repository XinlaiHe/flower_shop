"use strict";

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from "../store/actions/user.action";

class UserBar extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
        const isLoginUser = this.props.userId;
        let link;

        if (isLoginUser) {
            link = <a className="navigation_user-bar_logout">{this.props.username}<span> , </span><span onClick={this.props.logout.bind(this)}>Logout</span></a>;
        } else {
            link = <a className="navigation_user-bar_login" onClick={this.props.login.bind(this, "asd", "xyz")}>Log in</a>;
        }

		return (
			<div className="navigation_user-bar">
                {link}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserBar);