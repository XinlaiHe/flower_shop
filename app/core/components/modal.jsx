
"use strict";

import React from "react";

class Modal extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="modal">
				{this.props.content}
			</div>
			)
	}
}

export default Modal;
