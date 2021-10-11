import React from 'react'
import Section from '../../containers/Section/Section'
import Search from "../Search/Search";
import "./Location.css";

const Location = () => {
    return (
			<Section>
				<span>
					<i className="info circle icon"></i>
				</span>
				<div className="row1">
					<span>
						<button className="import">Import</button>
						<button className="export">Export</button>
					</span>
					<Search />
					<Search />
				</div>
				<div className="row2">
					<Search />
					<Search />
					<Search />
				</div>
			</Section>
		);
}

export default Location
