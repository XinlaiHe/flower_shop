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
        const isLoginUser = this.props.userInfo.userId;
        let link;

        if (isLoginUser) {
            link = <a>{this.props.userInfo.username}<span> , </span><span onClick={this.props.logout.bind(this)}>Logout</span></a>;
        } else {
            link = <a onClick={this.props.login.bind(this, "asd", "xyz")}>Log in</a>;
        }

		return (
			<div className="user-bar">
                {link}
			</div>
			)
	}
}

const mapStateToProps = (state) => {
	return state;
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(userActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBar);