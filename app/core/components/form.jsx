"use strict";

import React from "react";
import _ from "lodash";
import InputField from "./inputField.jsx";
import Control from "./control.jsx";

class Form extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
        const className = "form " + this.props.formType;
        const inputGroup = _.map(this.props.formFields, (item) => <InputField key={item} name={item}/>);
        const controls = _.map(this.props.controls, (item) => <Control key={item} name={item} action={this.props[item]}/>);

		return (
			<div className={className}>
                {inputGroup}
                {controls}
			</div>
			)
	}

	getAction() {

	}
}

export default Form;