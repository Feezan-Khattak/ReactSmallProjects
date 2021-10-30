import { makeStyles } from "@material-ui/styles";

export const AccordionStyle = makeStyles({
	accordionContainer: {
		width: "80%",
		margin: "10% auto",
		boxShadow: "0px 2px 20px rgba(101, 102, 101, 0.850)",
		padding: "20px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},

	accordionEntryStyle: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		padding: "10px",
		margin: "10px",
		boxShadow: "0px 2px 20px rgba(101, 102, 101, 0.850)",
		borderRadius: "10px",
	},
	titleHead: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: "10px",
		"& button": {
			border: "none",
			fontSize: "15px",
			color: "green",
			fontWeight: "bolder",
			outline: "none",
			"&:hover": {
				color: "blue",
			},
		},
	},
});
