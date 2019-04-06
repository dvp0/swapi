import { EXPIRE_IN_SECONDS } from "utils/values";
import Fifo from "localstorage-fifo";
const swapiCache = new Fifo({ namespace: 'tasks' });

// Simple local storage caching system
export function getCachedResult(url) {
  return swapiCache.get(encodeURI(url));
}

export function cacheResult(url, data) {

  const _json = {
    expiresAt: Date.now() + (EXPIRE_IN_SECONDS * 1000),
    data: data
  };
  swapiCache.set(encodeURI(url), _json);
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
