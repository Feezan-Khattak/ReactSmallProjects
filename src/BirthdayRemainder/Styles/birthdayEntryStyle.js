import { makeStyles } from "@material-ui/styles";

export const BirthdayEntryStyle = makeStyles({
	mainDiv: {
		display: "flex",
		margin: "10px",
	},

	remainderDiv: {
		width: "30%",
		margin: "2% auto",
		backgroundColor: "pink",
		padding: "30px",
		borderRadius: "20px",
	},
	imgStyle: {
		width: "80px",
		height: "80px",
		borderRadius: "50px",
		marginRight: "10px",
	},
	dataDiv: {
		"& h2": {
			fontSize: "23px",
			margin: "0",
		},
		"& p": {
			margin: "0px 0px",
			fontSize: "15px",
			opacity: "0.5",
		},
		"& pre": {
			margin: "0 0",
			opacity: "0.5",
		},
	},
	button: {
		width: "100%",
		padding: "10px",
		color: "black",
		backgroundColor: "pink",
		outline: "none",
		borderRadius: "8px",
		textAlign: "center",
		transition: "1s",
		"&:hover": {
			letterSpacing: "10px",
			fontWeight: "bold",
		},
	},
});
