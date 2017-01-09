"use strict";

import React from "react";
import $ from "jquery";

class Control extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const name = "control " + this.props.text;

		return (
			<div className="control">
                <button className={name} onClick={this.invoke.bind(this)}>{this.props.text}</button>       
			</div>
			)
	}

	invoke() {
		let username;
		let password;
		let password_retype;

		if (this.props.text === "Login") {
			username = $("#Username").val();
			password = $("#Password").val();
			this.props.action.call(null, username, password);
		} else if (this.props.text === "Register") {
			username = $("#Username").val();
			password = $("#Password").val();
			password_retype = $("#Password-retype").val();

			if (password === password_retype)
				this.props.action.call(null, username, password);
		} else {
			this.props.action();
		}
	}
}

export default Control;
