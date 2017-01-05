"use strict";

import React from 'react';
import UserBar from "../account/userBar.jsx";

class Navigation extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="navigation">
                <UserBar />
			</div>
			)
	}
}

export default Navigation;
