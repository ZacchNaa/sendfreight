import { InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import Section from "../../containers/Section/Section";
import "./Cargo.css";

const Cargo = () => {
	return (
		<Section>
			<div className="cargoDetails">
				<div className="cargoLeft">
					<h3>Cargo Details</h3>
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
						<TextField
							label="Total Volume"
							variant="outlined"
							id="outlined-end-adornment"
							sx={{ m: 1, width: "20ch" }}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">cbm</InputAdornment>
								),
							}}
						/>
						<TextField
							label="Total Weight"
							size="medium"
							variant="outlined"
							id="outlined-end-adornment"
							sx={{ m: 0.1, width: "20ch" }}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">kg</InputAdornment>
								),
							}}
						/>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Cargo;
