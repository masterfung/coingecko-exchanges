import { fetchExchangeDetails } from "./exchangeAPI";

describe("fetching exchange detail from Coingecko", () => {
  it("should retrieve a resulting exchange", () => {
    fetchExchangeDetails().then(data => data.json()).then( res => expect(res).length(1));
  });
})