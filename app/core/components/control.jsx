"use strict";

import React from "react";

class Control extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const name = "form_control " + this.props.name;

		return (
			<div className="form_control">
                <button className={name} onClick={this.props.action.bind(this)}>{this.props.name}</button>       
			</div>
			)
	}
}

export default Control;
