import React from 'react'
import Section from '../../containers/Section/Section'
import Item from "./Item";
import "./Service.css"

const serviceItems = [
    {
        text: "Air Freight",
        itemIcon: "plane"
    },
    {
        text: "Sea Freight",
        itemIcon: "box"
    },
    {
        text: "Inland (Truck & Barge)",
        itemIcon: "truck"
    },
    {
        text: "Customs Clerance",
        itemIcon: "subway"
    },
]

const Service = () => {
    
    const item = serviceItems.map((serviceItem, index) => {
        return <Item key={index} label={serviceItem.text} cardIcon={serviceItem.itemIcon} />
    })
    return (
			<Section>
				<h3>Select a service</h3>
				<div className="itemSection">{item}</div>
			</Section>
		);
}

export default Service
