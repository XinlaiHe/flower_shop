"use strict";

import React from "react";

class UserBar extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
        let link;

        if (this.props.userId && this.props.username) {
            link = <a className="navigation_user-bar_logout">{this.props.username}<span> , </span><span onClick={this.props.logout.bind(this)}>Logout</span></a>;
        } else {
            link = <a className="navigation_user-bar_login" onClick={this.props.tryLogin.bind(this)}>Log in</a>;
        }

		return (
			<div className="navigation_user-bar">
                {link}
			</div>
			)
	}
}

export default UserBar;