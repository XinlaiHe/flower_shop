"use strict";

import React from "react";

class InputField extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="form input-field">
                <label className="form input-field_label">{this.props.name}</label>
                <input className="form input-field_text" />
			</div>
			)
	}
}

export default InputField;
