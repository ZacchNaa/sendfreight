import React from 'react'
import Section from '../../containers/Section/Section'
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
					<div class="ui left icon input from">
						<input type="text" placeholder="From City or part" />
						<i aria-hidden="true" class="map marker alternate icon"></i>
					</div>
					<div class="ui left icon input to">
						<input type="text" placeholder="To City or part" />
						<i aria-hidden="true" class="map marker alternate icon"></i>
					</div>
				</div>
				<div className="row2">
					<div class="ui left icon input date">
						<input type="text" placeholder="Ready Date" />
						<i aria-hidden="true" class="calendar icon"></i>
					</div>
					<div
						role="listbox"
						aria-expanded="false"
						class="ui selection dropdown incoterms"
						tabindex="0">
						<div
							aria-atomic="true"
							aria-live="polite"
							role="alert"
							class="divider default text">
							Inconterms
						</div>
						<i aria-hidden="true" class="dropdown icon"></i>
						<div class="menu transition">
							<div
								role="option"
								aria-checked="false"
								aria-selected="true"
								class="selected item">
								<span class="text">Afghanistan</span>
							</div>
							<div
								role="option"
								aria-checked="false"
								aria-selected="false"
								class="item">
								<span class="text">Aland Islands</span>
							</div>
						</div>
					</div>
					<div class="ui input cargoValue">
						<input type="text" placeholder="Total Cargo Value" />
					</div>
				</div>
			</Section>
		);
}

export default Location
