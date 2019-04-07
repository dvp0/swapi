import { EXPIRE_IN_SECONDS } from "utils/values";
import Fifo from "localstorage-fifo";
const cache = new Fifo({ namespace: 'darth' });

// Simple yet robust local storage caching system

export function getCachedResult(url) {
  return cache.get(encodeURI(url));
}

export function cacheResult(url, data) {
  cache.set(encodeURI(url), {
    expiresAt: Date.now() + (EXPIRE_IN_SECONDS * 1000),
    data: data
  });
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
