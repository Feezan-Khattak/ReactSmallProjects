import React from "react";
import Slide from "./Slide";
import { Style } from "./Style";

const SliderContainer = () => {
	// style
	const style = Style();
	return (
		<main className={style.mainContainer}>
			<div>
				<h1 className={style.heading1}>Review</h1>
			</div>
			<div>
				<Slide />
			</div>
		</main>
	);
};

export default SliderContainer;
