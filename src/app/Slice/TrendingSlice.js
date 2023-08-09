import { createSlice } from "@reduxjs/toolkit";
import { getTrending } from "../actions/Blogs";

const initialState = {
  trending: [],
  loading: "idle",
  error: null,
  totalPages: 0,
};

const trendSlice = createSlice({
  name: "trend",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // eslint-disable-next-line no-unused-vars
      .addCase(getTrending.pending, (state, action) => {
        return {
          ...state,
          loading: "pending",
        };
      })
      .addCase(getTrending.fulfilled, (state, { payload }) => {
        return {
          ...state,
          loading: "success",
          trending: payload.results,
          totalPages: Math.ceil(payload.count / 5),
        };
      })
      .addCase(getTrending.rejected, (state, { payload }) => {
        return {
          ...state,
          loading: "failed",
          error: payload,
        };
      });
  },
});

export const Trend = (state) => state.trend.trending;
export const Status = (state) => state.trend.loading;
export const Error = (state) => state.trend.error;
export const TotalPages = (state) => state.trend.totalPages;

export default trendSlice.reducer;
