"use strict";

import React from "react";
import _ from "lodash";
import InputField from "./inputField.jsx";

class Form extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
        console.log(this.props)
        const className = "form " + this.props.formType;
        const inputGroup = _.map(this.props.formFields, (item) => <InputField name= {item}/>);

		return (
			<div className={className}>
                {inputGroup}
			</div>
			)
	}
}

export default Form;