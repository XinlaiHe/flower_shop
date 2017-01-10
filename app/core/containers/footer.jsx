"use strict";

import React from "react";
import Link from "../components/link.jsx";

class Footer extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="footer">
                <div className="footer_link-group">
                	<span className="footer_link-group_title">Hot Links</span>
                	<Link href="/spring" text="Spring Express"/>
                	<Link href="/summer" text="Summer Express"/>
                	<Link href="/autumn" text="Autumn Express"/>
                	<Link href="/winter" text="Winter Express"/>
                </div>
                
                <div className="footer_link-group">
                	<span className="footer_link-group_title">Customer Service</span>
                	<Link href="/spring" text="Shipping & Return"/>
                	<Link href="/autumn" text="Complaints"/>
                	<Link href="/winter" text="Contact Us"/>
                </div>
			</div>
			)
	}
}

export default Footer;
