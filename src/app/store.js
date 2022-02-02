import { configureStore } from "@reduxjs/toolkit";
import exchangesReducer from "../features/exchanges/exchangesSlice";
import exchangeReducer from "../features/exchange/exchangeSlice";

export const store = configureStore({
  reducer: {
    exchanges: exchangesReducer,
    exchange: exchangeReducer,
  },
});
