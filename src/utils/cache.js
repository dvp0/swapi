import { EXPIRE_IN_SECONDS } from "utils/values";

// Simple local caching system 
export function getCachedResult(url) {
  return (window.swapiCache || {})[encodeURI(url)];
}

export function cacheResult(url, data) {

  window.swapiCache = {
    ...window.swapiCache || {},
    [encodeURI(url)]: {
      expiresAt: Date.now() + (EXPIRE_IN_SECONDS * 1000),
      data: data
    },
  };

}

export function fetchAndCacheResult(url) {

  const cachedResult = getCachedResult(url);

  if (cachedResult && cachedResult.expiresAt >= Date.now()) {

    return Promise.resolve(cachedResult.data);

  } else {

    return fetch(url)
      .then(r => r.json())
      .then(data => {
        cacheResult(url, data);
        return data;
      });
  }
}
