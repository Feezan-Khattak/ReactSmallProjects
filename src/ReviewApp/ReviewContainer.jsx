import React from "react";
import ReviewEntry from "./ReviewEntry";
import { ReviewStyle } from "./Styles/ReviewStyle";

const ReviewContainer = () => {
	// Styles
	const reviewStyle = ReviewStyle();

	return (
		<div className={reviewStyle.reviewContainer}>
			<h1>Reviews</h1>
			<ReviewEntry />
		</div>
	);
};

export default ReviewContainer;
