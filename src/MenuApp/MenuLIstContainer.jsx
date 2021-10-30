import React from "react";
import { Style } from "./Style";

const MenuLIstContainer = ({ data }) => {
	// styles
	const style = Style();

	return (
		<section className={style.menuListContainer}>
			{data.map((item) => {
				const { id, title, price, img, desc } = item;
				return (
					<article key={id} className={style.itemsContainer}>
						<div>
							<img src={img} alt={title} title={title} className={style.photo} />
						</div>
						<div className={style.itemsDetails}>
							<header className={style.itemHeader}>
								<h4>{title}</h4>
								<pre>Rs. {price}</pre>
							</header>
							<hr />
							<p>{desc}</p>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default MenuLIstContainer;
