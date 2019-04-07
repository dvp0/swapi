import { useState, useEffect } from "react";
import { fetchAndCacheResult } from "utils/cache";

export function getSpeciesData(speciesUrls = {}, _charactersData = []) {

  // const movie = (_movie || {});
  // const speciesUrls = movie.species || [];
  const charactersData = _charactersData || [];
  const [speciesData, setSpeciesData] = useState(null);
  const [speciesLoading, setSpeciesLoading] = useState(false);

  useEffect(() => {

    async function getSpeciesData() {

      if (speciesUrls.length && charactersData.length) {

        setSpeciesLoading(true);

        const _speciesPromises = speciesUrls.map(url => fetchAndCacheResult(url));
        const _speciesResults = await Promise.all(_speciesPromises);

        const _data = _speciesResults.map(s => {
          return {
            name: s.name,
            value: charactersData.filter(c => c.species === s.url).length
          };
        });

        setSpeciesData(_data);
        setSpeciesLoading(false);
      }

    }

    getSpeciesData(_charactersData);

  }, [_charactersData, charactersData, speciesUrls]);

  return {
    speciesData,
    speciesLoading,
  };
}
