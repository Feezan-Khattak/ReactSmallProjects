import React, { useState } from "react";
import { SlideData } from "./SlideData";
import { Style } from "./Style";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

const Slide = () => {
	// styles
	const style = Style();

	// states
	const [slideData, setSlideData] = useState(SlideData);
	const [index, setIndex] = useState(0);
	const { name, job, img, text } = SlideData[index];

	// functions
	const checkNumber = (number) => {
		if (number < 0) {
			return SlideData.length - 1;
		}
		if (number > SlideData.length - 1) {
			return 0;
		}
		return number;
	};

	const nextReview = () => {
		setIndex(() => {
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
	};

	const preReview = () => {
		setIndex(() => {
			let newIndex = index - 1;
			return checkNumber(newIndex);
		});
	};

	return (
		<section className={style.slideContainer}>
			<div className={style.imgDiv}>
				<img className={style.img} src={img} />
			</div>
			<div className={style.slideInfo}>
				<button onClick={preReview} className={style.btn}>
					<FaAngleDoubleLeft />
				</button>
				<div className={style.basicInfo}>
					<h2>{name}</h2>
					<pre>{job}</pre>
					<p>{text}</p>
				</div>
				<button onClick={nextReview} className={style.btn}>
					<FaAngleDoubleRight />
				</button>
			</div>
			<div className={style.btnDiv}></div>
		</section>
	);
};

export default Slide;
