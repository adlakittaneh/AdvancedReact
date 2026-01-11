const cache = new Map();

export function fetchResource(key, fetcher) {
  if (!cache.has(key)) {
    const promise = fetcher().then(
      data => cache.set(key, { status: "ready", data }),
      error => cache.set(key, { status: "error", error })
    );
    cache.set(key, { status: "loading", promise });
  }
  return cache.get(key);
}
