import React, { useState } from "react";
import AccordionEntry from "./AccordionEntry";
import { AccordionData } from "./AccordionData";
import { AccordionStyle } from "./AccordionStyle";

const AccordionContainer = () => {
	// styles
	const accordionStyle = AccordionStyle();

	// states
	const [accordionData, setAccordionData] = useState(AccordionData);
	return (
		<>
			<section className={accordionStyle.accordionContainer}>
				<div>
					<h1>Questions And Answers About Login</h1>
				</div>
				<div>
					{accordionData.length > 0
						? accordionData.map((question) => {
								return <AccordionEntry key={question.id} {...question} />;
						  })
						: "NO Question Found"}
				</div>
			</section>
		</>
	);
};

export default AccordionContainer;
