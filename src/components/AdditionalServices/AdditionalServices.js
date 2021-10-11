import React from "react";
import Section from "../../containers/Section/Section";
import AddItem from "./AddItem";
import "./AdditionalServices.css";

const serviceItems = [
	{
		heading: "Export Forwarding",
		text: "We handle customs clearance and documentation.",
	},
	{
		heading: "Import Customs Clearance",
		text: "We handle import customs and regulatory requirements.",
	},
	{
		heading: "Cargo Insurance",
		text: "Protect your cargo from logistics risks up to its full value.",
	},
	{
		heading: "Transport / Delivery",
		text: "We deliver the cargo to your door step from the parts.",
	},
];

const AdditionalServices = () => {
	const item = serviceItems.map((serviceItem, index) => {
		return (
			<AddItem
				key={index}
				heading={serviceItem.heading}
				text={serviceItem.text}
			/>
		);
	});
	return (
		<Section>
			<h5>Additional Service</h5>
			<div className="itemSection">{item}</div>
		</Section>
	);
};

export default AdditionalServices;
