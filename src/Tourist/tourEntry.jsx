import React, { useState } from "react";
import { TourStyle } from "./Styles/TourStyles";

const TourEntry = ({ tours, removeTour }) => {
	// styles
	const tourStyle = TourStyle();

	// states
	const [readMore, setReadMore] = useState(false);

	const btnName = readMore ? " show less" : " read more";

	return (
		<>
			{tours.length > 0
				? tours.map((tour) => {
						return (
							<div className={tourStyle.tourEntryDiv}>
								<div>
									<img src={tour.img} alt={tour.name} title={tour.name} />
								</div>
								<div>
									<h2>{tour.name}</h2>
									<pre className={tourStyle.price}>{tour.price}</pre>
									<p>
										{readMore ? tour.desc : `${tour.desc.substring(0, 100)}...  `}
										<button onClick={() => setReadMore(!readMore)}>{btnName}</button>
									</p>
								</div>
								<div>
									<button
										className={tourStyle.tourBtn}
										onClick={() => removeTour(tour.id)}>
										Clear this Tour
									</button>
								</div>
							</div>
						);
				  })
				: "No Tour Found"}
		</>
	);
};

export default TourEntry;
