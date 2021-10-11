import React from "react";
import Section from "../../containers/Section/Section";
import Search from "../Search/Search";
import "./Cargo.css";

const Cargo = () => {
	return (
		<Section>
			<div className="cargoDetails">
				<div className="cargoLeft">
					<h5>Cargo Details</h5>
					<span>
						<i className="toggle on icon"></i>
						<h6>{`Dangerous Cargo {ex. Chemicals, Battery }`}</h6>
					</span>
				</div>
				<div className="cargoRight">
					<div className="package">
						<span className="dimension">Total Dimensions</span>
						<span className="details">Packages Details</span>
					</div>
					<div className="volume">
						<Search />
						<Search />
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Cargo;
