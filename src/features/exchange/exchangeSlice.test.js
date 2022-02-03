import reducer, { resetExchange } from "./exchangeSlice";

test("Exchange Slice ---- should return the initial state", () => {
  const initialState = {
    exchange: null,
    status: "none"
  }
  expect(reducer(undefined, {})).toEqual(initialState);
});

test("should reset existing exchange data after resetExchange triggers", () => {
  const previousState = {
    status: "idle",
    exchange: {
      name: "FTX",
      year_established: 2019
    }
  }
  expect(reducer(previousState, resetExchange())).toEqual({
      status: "none",
      exchange: null
  })
});