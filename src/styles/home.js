import { stylesheet } from "typestyle";
import { colors } from "utils/values";

export const _styles = stylesheet({
	wrapper: {
		margin: "0px auto",
		padding: "100px 50px 0",
		fontFamily: "arial",
		display: "flex",
		justifyContent: "space-between",
	},
	eachMovie: {
		width: "calc(100% / 7)",
		height: "auto",
		padding: "15px 15px 0px",
		textAlign: "center",
		transition: "transform .2s",
		borderRadius: "10px",
		cursor: "pointer",
		$nest: {
			"h6": {
				opacity: 0,
				margin: "10px 0",
			},
			"&:hover": {
				zIndex: 1,
				transform: "scale(1.2)",
				background: colors.gray,
				boxShadow: `1px 1px 20px 5px ${colors.black}`,
				$nest: {
					"h6": {
						opacity: 0.7,
					}
				}
			},
			"&:active": {
				transform: "scale(1.1)",
			}
		}
	}
});