import { makeStyles } from "@material-ui/styles";

export const Style = makeStyles({
	menuContainer: {
		// backgroundColor: "blue",
	},
	menuListContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		flexWrap: "wrap",
	},
	itemsContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		width: "40%",
		margin: "20px",
		padding: "20px",
	},
	photo: {
		width: "200px",
		height: "200px",
		borderRadius: "100px",
	},
	itemsDetails: {
		padding: "10px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	itemHeader: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		"& > pre": {
			backgroundColor: "rgba(0, 0, 100, 0.3)",
			padding: "5px",
			borderRadius: "10px",
			marginBottom: "5px",
			color: "green",
		},
	},
	btnContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		"& button": {
			border: "2px solid green",
			color: "blue",
			padding: "10px",
			margin: "10px",
			borderRadius: "10px",
			fontWeight: "bolder",
			"&:hover": {
				color: "green",
				border: "2px solid blue",
				backgroundColor: "rgba(0, 150, 0, 0.4)",
			},
		},
	},
});
