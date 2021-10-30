import React, { useState } from "react";
import NavBar from "./NavBar";
import { Style } from "./Style";
import { MenuData } from "./MenuData";
import MenuLIstContainer from "./MenuLIstContainer";

// get All categories
const allCategories = [
	"All",
	...new Set(MenuData.map((item) => item.category)),
];

const MenuContainer = () => {
	// styles
	const style = Style();

	// states
	const [menuData, setMenuData] = useState(MenuData);
	const [menuCategory, setMenuCategory] = useState(allCategories);

	// arrow function
	const filterItems = (category) => {
		if (category === "All") {
			setMenuData(MenuData);
			return;
		}
		const newItems = MenuData.filter((item) => item.category === category);
		setMenuData(newItems);
	};

	return (
		<main className={style.menuContainer}>
			<div>
				<h1
					style={{
						fontSize: "50px",
						textAlign: "center",
						marginBottom: "30px",
						color: "pink",
					}}>
					Menu List
				</h1>
			</div>
			<div>
				<NavBar categories={menuCategory} filterItems={filterItems} />
				<br />
				<MenuLIstContainer data={menuData} />
			</div>
		</main>
	);
};

export default MenuContainer;
