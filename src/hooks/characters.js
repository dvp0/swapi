import { useState, useEffect } from "react";
import { fetchAndCacheResult } from "utils/cache";

function getUniqueHomes(characters) {
  return characters.reduce((aggr, character) => {
    if (aggr.indexOf(character.homeworld) < 0) {
      return aggr.concat([character.homeworld]);
    }
    return aggr;
  }, []);
}

function cleanValue(value) {
  return value === "unknown" ? Infinity : parseFloat(value.replace(",", ""));
}

// This is responsible for getting data for all the characters in a movie (parallel fetching)
// + finding unique home types from the those results
// + fetching deatails of these homes (parallel fetching)
// + constructing following structure to be used later on for rendering
// [{
//   name,
//   homeworld,
//   mass,
//   height,
//   species
// }]

export function useCharactersFetch(_movie = {}) {

  const movie = (_movie || {});
  const urls = movie.characters || [];
  const [charactersData, setCharsData] = useState([]);
  const [charactersLoading, setCharactersLoading] = useState(false);

  useEffect(() => {

    async function getCharactersAndHomes() {

      if (urls.length) {

        setCharactersLoading(true);

        const finalResults = [];
        const _charsPromises = urls.map(url => fetchAndCacheResult(url));
        const _charsResults = await Promise.all(_charsPromises);
        const _uniqueHomeUrls = getUniqueHomes(_charsResults);
        const _homesPromises = _uniqueHomeUrls.map(url => fetchAndCacheResult(url));
        const _homesResults = await Promise.all(_homesPromises);

        _charsResults.forEach(character => {
          finalResults.push({
            name: character.name,
            homeworld: _homesResults.find(h => h.url === character.homeworld).name,
            mass: cleanValue(character.mass),
            height: cleanValue(character.height),
            species: character.species[0]
          });
        });

        setCharsData(finalResults);
        setCharactersLoading(false);
      }

    }

    getCharactersAndHomes();

  }, [urls, movie]);

  return {
    charactersData,
    charactersLoading,
  };
}
