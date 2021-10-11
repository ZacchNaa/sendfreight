import React from "react";
import { Input } from "semantic-ui-react";

const Search = () => {
	return (
		<div className="search">
			<Input
				className="search-input"
				width="100"
				icon="search"
				placeholder="Search..."
			/>
		</div>
	);
};

export default Search;
