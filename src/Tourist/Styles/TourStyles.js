import { makeStyles } from "@material-ui/styles";

export const TourStyle = makeStyles({
	tourEntryDiv: {
		display: "flex",
		flexDirection: "column",
		width: "52%",
		margin: "20px auto",
		padding: "10px",
		borderRadius: "10px",
		boxShadow: "0px 3px 20px rgba(101, 102, 102, 0.850)",
	},
	price: {
		backgroundColor: "#323232",
		width: "15%",
		padding: "10px",
		textAlign: "center",
		color: "white",
		fontWeight: "bolder",
		borderRadius: "5px",
		marginBottom: "10px",
	},
	tourBtn: {
		padding: "10px",
		marginTop: "15px",
		width: "100%",
		backgroundColor: "rgb(0, 150, 0)",
		outline: "none",
		border: "0",
		color: "white",
		textAlign: "center",
		fontSize: "20px",
		"&:hover": {
			backgroundColor: "rgb(0, 175, 0)",
		},
	},
});
