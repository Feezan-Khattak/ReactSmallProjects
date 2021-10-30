import { makeStyles } from "@material-ui/styles";

export const Style = makeStyles({
	mainContainer: {
		padding: "10px",
	},
	heading1: {
		padding: "10px",
		textAlign: "center",
		fontSize: "50px",
		color: "rgb(0, 255, 0)",
	},
	slideContainer: {
		width: "50%",
		margin: "10px auto",
	},
	imgDiv: {
		textAlign: "center",
	},
	img: {
		width: "200px",
		height: "200px",
		borderRadius: "100px",
	},
	slideInfo: {
		display: "flex",
		flexDirection: "row",
	},
	basicInfo: {
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		margin: "5px",
		"& pre": {
			marginBottom: "3px",
		},
	},
	btn: {
		border: "0",
		background: "none",
		padding: "10px",
		margin: "20px",
		fontSize: "40px",
		color: "rgb(0, 0, 50)",
		transition: "1s",
		"&:hover": {
			color: "rgb(0, 0, 100)",
		},
	},
});
