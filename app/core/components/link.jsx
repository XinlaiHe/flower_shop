"use strict";

import React from "react";

class Link extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="link">
                <a onClick={this.props.action}>{this.props.text}</a>
			</div>
			)
	}
}

export default Link;
