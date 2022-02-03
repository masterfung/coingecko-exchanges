import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchExchanges } from "./exchangesAPI";

const initialState = {
  exchanges: null,
  status: "idle",
};

export const fetchExchangesAsync = createAsyncThunk(
  "exchanges/fetchExchanges",
  async(page) => {
    const response = await fetchExchanges(page);
    return await response.json();
  }
)

export const exchangesSlice = createSlice({
  name: "exchanges",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangesAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchExchangesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.exchanges = action.payload
      })
  }
});

export const selectExchanges = state => state.exchanges.exchanges;

export default exchangesSlice.reducer;