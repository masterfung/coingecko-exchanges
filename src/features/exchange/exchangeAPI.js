export function fetchExchangeDetails(id) {
  return new Promise((resolve) => {
    resolve(fetch(`https://api.coingecko.com/api/v3/exchanges/${id}`));
  })
}