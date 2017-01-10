"use strict";

import React from "react";

class Link extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		let content;

		if (this.props.action) {
			content = <a onClick={this.props.action}>{this.props.text}</a>
		} else if (this.props.href) {
			content = <a href={this.props.link}>{this.props.text}</a>
		}

		return (
			<div className="link">
                {content}
			</div>
			)
	}
}

export default Link;
