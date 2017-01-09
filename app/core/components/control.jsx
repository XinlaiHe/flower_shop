"use strict";

import React from "react";

class Control extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const name = "control " + this.props.text;

		return (
			<div className="control">
                <button className={name} onClick={this.props.action.bind(this)}>{this.props.text}</button>       
			</div>
			)
	}
}

export default Control;
