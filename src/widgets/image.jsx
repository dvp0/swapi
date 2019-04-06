import * as React from "react";
import { style, stylesheet, classes } from "typestyle";

// helpers
import { useFetch } from "hooks/fetch";

// static values
import { api } from "utils/api";
import { colors } from "utils/values";

const _styles = {
	placeholder: (isCharacter) => {
		let _s = {
			display: "flex",
			justifyContent: "center",
			flexDirection: "column",
			color: colors.gray,
			background: colors.dark,
		};

		if (!isCharacter) {
			_s = {
				..._s,
				height: "200px",
			};
		}
		return style(_s);
	},
	...stylesheet({
		image: {
			height: "inherit",
			width: "100%",
			borderRadius: "7px",
			textAlign: "center",
		},
		thumb: {
			height: "150px",
			width: "100px",
			objectFit: "cover",
			borderRadius: "5px",
		}
	})
};

export function Image({ text, isCharacter }) {

	// lazy loading images
	const _url = isCharacter ? api.character(text) : api.poster(text);
	const _isSurged = window.location.host.indexOf("surge.sh") > -1;
	const _placeholder = _isSurged ? "(run locally to view images)" : "...";
	const _className = isCharacter ? _styles.thumb : _styles.image;

	const { data, loading } = useFetch(_url, [text]);

	if (!loading && data && !_isSurged) {
		return (<img src={data.value} className={_className} />);
	}

	return (
		<div className={classes(_className, _styles.placeholder(isCharacter))}>
			{_placeholder}
		</div>
	);

}