import React, { useState } from "react";
import { TabData } from "./Data";
import { Style } from "./Style";
import Tab from "./Tab";
import TabInfo from "./TabInfo";

// get All companies
const allCompanies = ["All", ...new Set(TabData.map((data) => data.company))];

const TabContainer = () => {
	// style
	const style = Style();

	// states
	const [tabData, setTabData] = useState(TabData);
	const [companies, setCompanies] = useState(allCompanies);

	// function
	const filterDetails = (company) => {
		if (company === "All") {
			setTabData(TabData);
			return;
		}
		const newDetails = TabData.filter((tab) => tab.company === company);
		setTabData(newDetails);
	};

	return (
		<main className={style.mainContainer}>
			<div className={style.mainHeading}>
				<h1>Experience</h1>
			</div>
			<section className={style.experienceContainer}>
				<div>
					<Tab filterDetails={filterDetails} companies={companies} />
				</div>
				<div>
					<TabInfo tabData={tabData} />
				</div>
			</section>
		</main>
	);
};

export default TabContainer;
