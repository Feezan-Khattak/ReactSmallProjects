import React from "react";

const TabInfo = ({ tabData }) => {
	return (
		<section>
			{tabData.map((data, index) => {
				const { id, title, dates, duties, company } = data;
				return (
					<article key={index}>
						<div>
							<h2>{title}</h2>
						</div>
						<div>
							<pre>{company}</pre>
						</div>
						<div>
							{duties.map((duty, index) => {
								return <p key={index}>{duty}</p>;
							})}
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default TabInfo;
