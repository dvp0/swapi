import {
  useState,
  useEffect
} from "react";
import {
  cacheResult,
  getCachedResult
} from "utils/cache";

// Custom React Hook for fetching mechanism

export function useFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const cachedResult = getCachedResult(url);

  useEffect(() => {

    async function getData() {

      if (cachedResult && cachedResult.expiresAt >= Date.now()) {
        setData(cachedResult.data);
      } else {
        setLoading(true);

        const response = await fetch(url);
        const data = await response.json();

        cacheResult(url, data);
        setData(data);
        setLoading(false);
      }
    };

    // In newer 16.X.X versions, react enforces this way of declaring async methods 
    // within useEffect and calling it right away rather than directly returning
    // async function as following 
    //
    // useEffect(async () => {....
    //

    getData();

  }, []);

  return {
    data,
    loading
  };
};