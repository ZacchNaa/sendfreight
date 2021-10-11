import React from 'react'
import "./Item.css"

const Item = ({ label, cardIcon }) => {
	return (
		<div className={`itemCard ${cardIcon}`}>
			<span className={cardIcon}>{label}</span>
			<i className={`${cardIcon} icon`}></i>
		</div>
	);
};

export default Item
