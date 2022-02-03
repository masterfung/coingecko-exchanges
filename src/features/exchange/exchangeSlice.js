import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchExchangeDetails } from "./exchangeAPI";

const initialState = {
  exchange: null,
  status: "none",
};

export const fetchExchangeAsync = createAsyncThunk(
  "exchange/fetchExchangeDetail",
  async(id) => {
    const response = await fetchExchangeDetails(id);
    return await response.json();
  }
)

export const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    resetExchange: (state) => {
      state.status = "none";
      state.exchange = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExchangeAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.exchange = action.payload;
      })
  }
});

export const { resetExchange } = exchangeSlice.actions;

export const selectExchange = state => state.exchange.exchange;

export const selectExchangeFetchStatus = state => state.exchange.status;

export default exchangeSlice.reducer;