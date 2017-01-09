"use strict";

import React from "react";

class InputField extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="input-field">
                <label className="input-field_label">{this.props.name}</label>
                <input id={this.props.name} className="input-field_text" required={this.props.required} onChange={this.onChange}/>
			</div>
			)
	}
}

export default InputField;
