export function fetchExchanges(page = 1) {
  return new Promise((resolve) => {
    resolve(fetch(`https://api.coingecko.com/api/v3/exchanges?per_page=100&page=${page}`));
  });
}