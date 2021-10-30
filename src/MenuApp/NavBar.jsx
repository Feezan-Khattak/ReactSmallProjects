import React from "react";
import { Style } from "./Style";

const NavBar = ({ categories, filterItems }) => {
	// styles
	const style = Style();

	return (
		<div className={style.btnContainer}>
			{categories.map((category, index) => {
				return (
					<section key={index}>
						<button onClick={() => filterItems(category)}>{category}</button>
					</section>
				);
			})}
		</div>
	);
};

export default NavBar;
