const cache = new Map();

export function useQuery(key, fetcher) {
  if (!cache.has(key)) {
    cache.set(key, fetcher());
  }
  return cache.get(key);
}
