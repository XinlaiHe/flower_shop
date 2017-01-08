"use strict";

import React from "react";

class InputField extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="form_input-field">
                <label className="form_input-field_label">{this.props.name}</label>
                <input className="form_input-field_text" />
			</div>
			)
	}
}

export default InputField;
