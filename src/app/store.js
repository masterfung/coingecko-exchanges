import { configureStore } from "@reduxjs/toolkit";
import exchangesReducer from "../features/exchanges/exchangesSlice";

export const store = configureStore({
  reducer: {
    exchanges: exchangesReducer,
  },
});
