import { createSlice } from "@reduxjs/toolkit";
import { getSingle } from "../actions/Blogs";

const initialState = {
  single: {},
  error: null,
  loading: "idle",
};

const detailedSlice = createSlice({
  name: "single",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // eslint-disable-next-line no-unused-vars
      .addCase(getSingle.pending, (state, action) => {
        return {
          ...state,
          loading: "pending",
        };
      })
      .addCase(getSingle.fulfilled, (state, { payload }) => {
        return {
          ...state,
          loading: "success",
          single: payload,
        };
      })
      .addCase(getSingle.rejected, (state, { payload }) => {
        return {
          ...state,
          loading: "failed",
          error: payload,
        };
      });
  },
});

export const Blog = (state) => state.single.single;
export const Error = (state) => state.single.error;
export const Status = (state) => state.single.loading;

export default detailedSlice.reducer;
