import { makeStyles } from "@material-ui/styles";

export const Style = makeStyles({
	mainContainer: {
		padding: "20px",
		// backgroundColor: "blue",
	},
	mainHeading: {
		"& h1": {
			fontSize: "50px",
			textAlign: "center",
			color: "green",
		},
	},
	experienceContainer: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		flexShrink: "0",
		width: "60%",
		margin: "20px auto",
	},
});
