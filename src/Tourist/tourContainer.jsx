import React, { useState } from "react";
import TourEntry from "./tourEntry";
import { data } from "./tourData";
import { TourStyle } from "./Styles/TourStyles";

const TourContainer = () => {
	// styles
	const tourStyle = TourStyle();
	// states
    const [tours, setTours] = useState(data);
    
    const deleteTour = (id) => {
        setTours(tours.filter((tour) => tour.id !== id));
    }

	console.log(tours);
	return (
		<div>
			<h1 style={{ fontSize: "70px", textAlign: "center", color: "brown" }}>
				Tours Camp
			</h1>
			<h3 style={{ fontSize: "30px", textAlign: "center", opacity: "0.5" }}>
				{tours.length} Tours
			</h3>
            <TourEntry tours={tours} removeTour={deleteTour}/>
			<button onClick={() => setTours([])} className={tourStyle.tourBtn}>
				Clear All Tours
			</button>
		</div>
	);
};

export default TourContainer;
