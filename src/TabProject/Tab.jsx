import React from "react";

const Tab = ({ filterDetails, companies }) => {
	return (
		<div>
			{companies.map((company, index) => {
				return <button onClick={() => filterDetails(company)}>{company}</button>;
			})}
		</div>
	);
};

export default Tab;
