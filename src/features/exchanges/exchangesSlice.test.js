import reducer from "./exchangesSlice";

test("ExchangesSlice ---- should return the initial state", () => {
  const initialState = {
    exchanges: null,
    status: "idle"
  }
  expect(reducer(undefined, {})).toEqual(initialState);
});