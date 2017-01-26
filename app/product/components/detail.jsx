"use strict";

import React from "react";
import { hashHistory } from 'react-router';

class Detail extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="detail">
                
			</div>
			)
	}

	redirect() {
		hashHistory.push("/flowers/" + this.props.id);
	}
}

export default Detail;
