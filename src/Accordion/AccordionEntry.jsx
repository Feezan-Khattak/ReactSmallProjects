import React, { useState } from "react";
import { AccordionStyle } from "./AccordionStyle";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const AccordionEntry = ({ qst, ans }) => {
	// styles
	const accordionStyle = AccordionStyle();

	// states
	const [show, setShow] = useState(false);

	return (
		<article className={accordionStyle.accordionEntryStyle}>
			<div className={accordionStyle.titleHead}>
				<h4>{qst}</h4>
				<button onClick={() => setShow(!show)}>
					{show ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</div>
			<div>
				<p>{show ? ans : null}</p>
			</div>
		</article>
	);
};

export default AccordionEntry;
