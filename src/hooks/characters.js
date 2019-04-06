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

export function useCharactersFetch(urls = []) {

  const [charsData, setCharsData] = useState(null);
  const [charsLoading, setCharsLoading] = useState(false);

  useEffect(() => {

    async function getCharactersAndHomes() {

      if (urls.length) {

        setCharsLoading(true);

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
            mass: character.mass,
            height: character.height,
          });
        });

        setCharsData(finalResults);
        setCharsLoading(false);
      }

    }

    getCharactersAndHomes();

  }, [urls]);

  return {
    charsData,
    charsLoading,
  };
}