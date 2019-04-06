import * as React from "react";
import { classes } from "typestyle";
import { navigate } from "@reach/router";

import { useFetch } from "hooks/fetch";
import { useCharactersFetch } from "hooks/characters";
import { api } from "utils/api";
import { _styles } from "styles/film";
import { Loading } from "widgets/plasma";
import { Image } from "widgets/image";

const { useState } = React;

function GoBack() {
	return (
		<div 
			className={classes(_styles.left, _styles.goBack)}
			onClick={() => navigate(api.homePage)}
		>
			Go Back
		</div>
	);
}


function Character({ character }) {
	return (
		<div className={_styles.character}>
			<Image isCharacter text={character.name} />
			<h4>{character.name}</h4>
			<h5>{character.mass}</h5>
			<h5>{character.height}</h5>
			<h5>{character.homeworld}</h5>
		</div>
	)
}

function Sortable() {

}

function CharacterList({ characters }) {

	const { sortV, setSortV } = useState("name");

	const _characters = characters.sort((a, b) => {
	  var valueA = a[sortV].toUpperCase();
	  var valueB = b[sortV].toUpperCase();
	  
	  if (valueA < valueB) {
	    return -1;
	  } else if (valueA > valueB) {
	    return 1;
	  } else {
	  	return 0;
	  }
	});

	return (
		<>
			<div>
				<h1>Characters</h1>
				{sort}
			</div>
			<div className={_styles.characters}>
				{_characters.map((c, i) => <Character key={i} character={c} />)}
			</div>
		</>
	);
}


export function Film({ filmId }) {

	const { data, loading } = useFetch(api.film(filmId));
	const { charsData, charsLoading } = useCharactersFetch((data || {}).characters);

	return (
		<div className={_styles.wrapper}>
			<Loading condition={loading || charsLoading} />
			{data && charsData &&
				<>
					<GoBack />
					<div className={_styles.right}>
						<div className={_styles.contentWrapper}>
							<div className={_styles.image}>
								<Image text={data.title} />
							</div>
							<div className={_styles.content}>
								<h1>{data.title}</h1>
								<h4>Episode {data.episode_id}</h4>
								<h4>Release on {data.release_date}</h4>
								<h4>Directed by {data.director}</h4>
							</div>
						</div>
						<CharacterList characters={charsData} />
					</div>
				</>
			}
		</div>
	);
};
