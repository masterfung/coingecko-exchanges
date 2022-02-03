import { fetchExchanges } from "./exchangesAPI";

describe("fetching exchanges from Coingecko", () => {
  it("should retrieve a resulting exchanges array of length 500", () => {
    fetchExchanges().then(data => data.json()).then( res => expect(res).length(500));
  });
})