import * as React from "react";
import { stylesheet } from "typestyle";

// static values
import { api } from "utils/api";

const _styles = stylesheet({
	image: {
		height: "inherit",
		width: "100%",
		borderRadius: "7px"
	},
	thumb: {
		height: "150px",
		width: "100px",
		objectFit: "cover",
		borderRadius: "5px",
	}
});

export function Poster({ text, isCharacter }) {

	// lazy loading images
	const url = isCharacter ? api.character(text) : api.poster(text);
	const { data, loading } = useFetch(url);
	const _className = isCharacter ? _styles.thumb : _styles.image;
	
	return !loading && data && (
		<img src={data.value} className={_className} />
	);
}
