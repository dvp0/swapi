import * as React from "react";
import _sortBy from "lodash.sortby";

import pluralize  from "pluralize";
import { useFetch } from "hooks/fetch";
import { getCharactersData } from "hooks/characters";
import { getSpeciesData } from "hooks/species";
import { api } from "utils/api";
import { _styles } from "styles/film";
import { Loading } from "widgets/plasma";
import { Image } from "widgets/image";
import { BackButton } from "visuals/back";
import { Loading as Pulse } from "widgets/pulse";

const { useState } = React;

function Character({ character }) {
	const mass = character.mass === Infinity ? " - " : character.mass;
	const height = character.height === Infinity ? " - " : character.height;

  return (
    <div className={_styles.character}>
			<Image isCharacter text={character.name} />
			<h4>{character.name}</h4>
			<h5><span title="Mass">{mass}kg</span> | <span title="Height">{height}cm</span></h5>
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

function CharacterList({ movie, setCharacters }) {

  const [sort, setSort] = useState("name");
  const [direction, setDirection] = useState("asc");
	let { charactersData, charactersLoading } = getCharactersData(movie); //  all the magic
	const _sortedChars = _sortBy(charactersData, o => o[sort]);
	const _characters = direction === "desc" ? _sortedChars.reverse() : _sortedChars;

	if (charactersData.length) {
		setCharacters(charactersData);
	}

	return (
		<div className={_styles.charactersWrapper}>
			<div className={_styles.charactersTitle}>
				<h3>Characters</h3>
				<Pulse condition={charactersLoading} />
				{!!_characters.length &&
					<Sortable active={sort} onChange={setSort} onDirectionChange={setDirection} direction={direction}/>
				}
			</div>
			{!!_characters.length &&
				<div className={_styles.characters}>
					{_characters.map((c, i) => <Character key={i} character={c} />)}
				</div>
			}
		</div>
	);
}

function SpeciesList({ movie, characters }) {
	const { speciesData, speciesLoading } = getSpeciesData((movie || {}).species, characters);

	if (speciesData && !speciesLoading) {
		const _last = speciesData.pop();
		const renderTupal = s => pluralize(s.name.toLowerCase(), s.value, true);

		return (
			<div className={_styles.speciesList}>
				This movie has {speciesData.map(s => renderTupal(s)).join(", ")} and {renderTupal(_last)}.
			</div>
		);
	}
	return <Pulse condition={!!characters.length && speciesLoading} />;
}

export function Film({ filmId }) {

  const { data, loading } = useFetch(api.film(filmId));
  const [characters, setCharacters] = useState([]);

  return (
    <div className={_styles.wrapper}>
			<Loading condition={loading} />
			{data &&
				<>
					<div className={_styles.left}>
						<BackButton />
					</div>
					<div className={_styles.right}>
						<div className={_styles.headerWrapper}>
							<div className={_styles.image}>
								<Image text={data.title} />
							</div>
							<div className={_styles.content}>
								<div>
									<h1>{data.title}</h1>
									<h4 className={_styles.sub}>
										<span>Episode {data.episode_id}</span>
										<span>Release on {data.release_date}</span>
										<span>Directed by {data.director}</span>
									</h4>
								</div>
								<SpeciesList movie={data} characters={characters} />
							</div>
						</div>
						<CharacterList movie={data} setCharacters={setCharacters}/>
					</div>
				</>
			}
		</div>
  );
}
