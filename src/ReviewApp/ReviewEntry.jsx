import React, { useState } from "react";
import { ReviewStyle } from "./Styles/ReviewStyle";
import { ReviewData } from "./ReviewData";

const ReviewEntry = () => {
	// Styles
	const reviewStyle = ReviewStyle();

	// states
	const [index, setIndex] = useState(0);
	const [readMore, setReadMore] = useState(false);
	const { name, job, img, text } = ReviewData[index];

	const checkNumber = (number) => {
		if (number > ReviewData.length - 1) {
			return 0;
		}
		if (number < 0) {
			return ReviewData.length - 1;
		}

		return number;
	};

	const nextReview = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
	};

	const preReview = () => {
		setIndex((index) => {
			let newIndex = index - 1;
			return checkNumber(newIndex);
		});
	};

	const randomReview = () => {
		let randIndex = Math.floor(Math.random() * ReviewData.length);
		// In case if the index is randoomly repeated then we just increment it by 1
		if (randIndex === index) {
			randIndex = index + 1;
		}
		setIndex(checkNumber(randIndex));
	};

	return (
		<>
			<div className={reviewStyle.reviewEntryContainer}>
				<div className={reviewStyle.imgDiv}>
					<img src={img} alt={name} />
				</div>
				<div className={reviewStyle.nameDiv}>
					<h1>{name}</h1>
					<pre>{job}</pre>
				</div>
				<div className={reviewStyle.textDiv}>
					<p>
						{readMore ? text : `${text.substring(0, 100)} ....`}
						<button onClick={() => setReadMore(!readMore)}>
							{readMore ? "  show less" : " read more"}
						</button>
					</p>
				</div>
				<div className={reviewStyle.buttonDiv}>
					<button title="previous" onClick={preReview}>
						&lt;
					</button>
					<button title="next" onClick={nextReview}>
						&gt;
					</button>
				</div>
				<button onClick={randomReview}>Random Review</button>
			</div>
		</>
	);
};

export default ReviewEntry;
