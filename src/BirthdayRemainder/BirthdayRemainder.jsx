import React, { useState } from "react";
import { birthdayData } from "./BirthdayData";
import BirthdayEntry from "./BirthdayEntry";
import { BirthdayEntryStyle } from "./Styles/birthdayEntryStyle";

const BirthdayRemainder = () => {
	// styles
	const birthdayStyle = BirthdayEntryStyle();

	// states
	const [people, setPeople] = useState(birthdayData);

	return (
		<div className={birthdayStyle.remainderDiv}>
			<h3>{people.length} Birthdays today</h3>
			<BirthdayEntry people={people} />
			<button className={birthdayStyle.button} onClick={() => setPeople([])}>
				Clear All
			</button>
		</div>
	);
};

export default BirthdayRemainder;
