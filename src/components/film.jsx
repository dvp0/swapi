import * as React from "react";
import _sortBy from "lodash.sortby";

import { useFetch } from "hooks/fetch";
import { useCharactersFetch } from "hooks/characters";
import { api } from "utils/api";
import { _styles } from "styles/film";
import { Loading } from "widgets/plasma";
import { Image } from "widgets/image";
import { BackButton } from "components/back";

const { useState } = React;

function Character({ character }) {
  return (
    <div className={_styles.character}>
			<Image isCharacter text={character.name} />
			<h4>{character.name}</h4>
			<h5 title="Mass">(M) {character.mass}</h5>
			<h5 title="Height">(H) {character.height}</h5>
			<h5 title="Home world">⌂ {character.homeworld}</h5>
		</div>
  )
}

function Sortable({ active, onChange, direction, onDirectionChange }) {
  const options = ["name", "mass", "homeworld", "height"];
  const _onDirectionChange = () => direction === "asc" ? onDirectionChange("desc") : onDirectionChange("asc");

  return (
    <div className={_styles.allSorts}>
			<div className={_styles.sortWrapper}>
				{options.map((o, i) =>
					<div key={i} onClick={() => onChange(o)} className={_styles.sort(active === o)}>{o}</div>
				)}
			</div>
			<div onClick={_onDirectionChange} className={_styles.arrow}>
				{direction === "asc" && "↑"}
				{direction === "desc" && "↓"}
			</div>
		</div>
  );
}

function CharacterList({ characters }) {

  const [sort, setSort] = useState("name");
  const [direction, setDirection] = useState("asc");
  const _sortedChars = _sortBy(characters, o => o[sort]);
  const _characters = direction === "desc" ? _sortedChars.reverse() : _sortedChars;

  return (
    <>
			<div className={_styles.charactersTitle}>
				<h3>Characters</h3>
				<Sortable active={sort} onChange={setSort} onDirectionChange={setDirection} direction={direction} />
			</div>
			<div className = { _styles.characters } >
				{_characters.map((c, i) => <Character key={i} character={c} />)}
			</div>
		</>
  );
}

export function Film({ filmId }) {

  const { data, loading } = useFetch(api.film(filmId));
  const { charsData, charsLoading } = useCharactersFetch((data || {})
    .characters);

  return (
    <div className={_styles.wrapper}>
			<Loading condition={loading || charsLoading} />
			{data && charsData &&
				<>
					<div className={_styles.left}>
						<BackButton />
					</div>
					<div className={_styles.right}>
						<div className={_styles.contentWrapper}>
							<div className={_styles.image}>
								<Image text={data.title} />
							</div>
							<div className={_styles.content}>
								<h1>{data.title}</h1>
								<h4>Episode {data.episode_id} | Release on {data.release_date} | Directed by {data.director}</h4>
							</div>
						</div>
						<CharacterList characters={charsData} />
					</div>
				</>
			}
		</div>
  );
}
