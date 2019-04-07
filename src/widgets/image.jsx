import * as React from "react";
import { style, stylesheet, classes } from "typestyle";
import { LoadingPulse } from "widgets/pulse";

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
			background: colors.charcoal,
			height: "152px",
		};

		if (!isCharacter) {
			_s = {
				..._s,
				height: "250px",
				background: colors.dark,
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
			background: colors.charcoal,
			height: "150px",
			width: "100px",
			objectFit: "cover",
			borderRadius: "5px",
		},
		placeholderText: {
			padding: "0px 10px",
		}
	})
};


// It renders an empty box >> hits our express app to get link to the image >> renders the image
// these calls to the express app are also cached for time specified.

export function Image({ text, isCharacter }) {

	const _url = isCharacter ? api.character(text) : api.poster(text);
	const _isSurged = true;
	const _placeholder = _isSurged
		? <a href="https://obi-van.herokuapp.com/">Go to fun version</a>
		: <LoadingPulse condition={true} />;
	const _className = isCharacter ? _styles.thumb : _styles.image;

	if (!_isSurged) {
		const {data, loading} = useFetch(_url, [text]);
		if (!loading && data && !_isSurged) {
			return (<img src={data.value} className={_className}/>);
		}
	}

	return (
		<div className={classes(_className, _styles.placeholder(isCharacter))}>
			<div className={_styles.placeholderText}>{_placeholder}</div>
		</div>
	);

}