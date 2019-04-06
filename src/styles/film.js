import { stylesheet } from "typestyle";
import { colors } from "utils/values";

export const _styles = stylesheet({
	wrapper: {
		fontFamily: "arial",
		margintTop: "100px",
		display: "flex",
		justifyContent: "space-between",
		minHeight: "100vh",
		flexFlow: "row wrap",
		overflow: "hidden",
	},
	goBack: {
		padding: "50px",
	},
	left: {
		flex: 1,
		height: "inherit",
		background: colors.black,
		color: colors.white,
	},
	right: {
		width: "90%",
		height: "inherit",
		background: colors.black,
	},
	contentWrapper: {
		padding: "50px 0",
		display: "flex",
		flexFlow: "row wrap",
	},
	content: {
		flex: 1,
		$nest: {
			"h1": {
				fontSize: "4em",
				color: colors.white,
			},
			"h4": {
				opacity: 0.7,
				padding: "5px",
			}
		}
	},
	image: {
		width: "20%",
		marginRight: "5%",
	},
	characters: {
		display: "flex",
		flexFlow: "row nowrap",
		overflow: "scroll",
	},
	character: {
		padding: "10px",
		textAlign: "center",
		$nest: {
			"h3": {
				fontSize: "2em",
				color: colors.white,
			},
			"h5": {
				opacity: 0.7,
				margin: "5px",
			}
		}
	},
	thumbnail: {
		height: "auto",
		width: "inherit",
	}

});