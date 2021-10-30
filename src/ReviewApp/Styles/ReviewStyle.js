import { makeStyles } from "@material-ui/styles";

export const ReviewStyle = makeStyles({
	reviewContainer: {
		width: "50%",
		margin: "10% auto",
		boxShadow: "0px 5px 20px rgba(101, 102, 101, 0.850)",
		padding: "20px",
		borderRadius: "20px",
		backgroundColor: "#6767ee",
		"& > h1": {
			fontSize: "50px",
			textAlign: "center",
			color: "#90ff90",
		},
	},

	buttonDiv: {
		textAlign: "center",
		"& button": {
			padding: "10px",
			margin: "10px",
			fontSize: "30px",
			border: "0px",
			backgroundColor: "#6767ee",
			transition: "1s",
			"&:hover": {
				color: "pink",
			},
		},
	},

	reviewEntryContainer: {
		width: "90%",
		margin: "5px auto",
		padding: "5px",
		textAlign: "center",
		// borderLeft: "5px solid black",
	},

	imgDiv: {
		"& img": {
			width: "200px",
			height: "200px",
			borderRadius: "1000px",
			border: "6px",
			borderStyle: "ridge",
		},
	},
});
