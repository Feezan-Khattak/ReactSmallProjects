import React from "react";
import { BirthdayEntryStyle } from "./Styles/birthdayEntryStyle";
import { birthdayData } from "./BirthdayData";

const BirthdayEntry = ({ people }) => {
	// styles
	const birthdayStyle = BirthdayEntryStyle();

	return (
		<>
			{people.map((value) => {
				return (
					<div className={birthdayStyle.mainDiv} key={value.id}>
						<div>
							<img
								src={value.img}
								alt={value.name}
								title={value.name}
								className={birthdayStyle.imgStyle}
							/>
						</div>
						<div className={birthdayStyle.dataDiv}>
							<h2>{value.name}</h2>
							<p>{value.year}</p>
							<pre>{value.dob}</pre>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default BirthdayEntry;
