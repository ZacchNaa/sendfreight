import React from "react";
import "./AddItem.css"

const AddItem = ({ heading, text }) => {
	return (
		<div className="addItem">
			<i className="toggle on icon"></i>
			<div className="desc">
				<h5>{heading}</h5>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default AddItem;
