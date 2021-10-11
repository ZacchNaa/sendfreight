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
					<div class="ui left icon input">
						<input type="text" placeholder="Search users..." />
						<i aria-hidden="true" class="map marker alternate icon"></i>
					</div>
					<div class="ui left icon input">
						<input type="text" placeholder="Search users..." />
						<i aria-hidden="true" class="map marker alternate icon"></i>
					</div>
				</div>
				<div className="row2">
					<div class="ui left icon input">
						<input type="text" placeholder="Search users..." />
						<i aria-hidden="true" class="map marker alternate icon"></i>
					</div>
					<div
						role="listbox"
						aria-expanded="false"
						class="ui selection dropdown"
						tabindex="0">
						<div
							aria-atomic="true"
							aria-live="polite"
							role="alert"
							class="divider default text">
							Select your country
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
					<div class="ui input">
						<input type="text" placeholder="Search..." />
					</div>
				</div>
			</Section>
		);
}

export default Location
