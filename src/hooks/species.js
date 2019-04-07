import { useState, useEffect } from "react";
import { fetchAndCacheResult } from "utils/cache";

// Responsible for fetching all the species and based on previously fetched
// character details, counts the number of each species in that list
// returning following format for ease of rendering
// [{
//   name: "Humans",
//   value: 3
// }]

export function useSpeciesFetch(speciesUrls = {}, _charactersData = []) {

  const charactersData = _charactersData || [];
  const [speciesData, setSpeciesData] = useState(null);
  const [speciesLoading, setSpeciesLoading] = useState(false);

  useEffect(() => {

    async function useSpeciesDataFetch() {

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

    useSpeciesDataFetch(_charactersData);

  }, [_charactersData, charactersData, speciesUrls]);

  return {
    speciesData,
    speciesLoading,
  };
}
