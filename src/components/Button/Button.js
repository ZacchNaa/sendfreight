import React from 'react'
import "./Button.css";

const Button = ({ btnText, btnClass }) => (
	<button className={btnClass}>{btnText}</button>
);

export default Button
