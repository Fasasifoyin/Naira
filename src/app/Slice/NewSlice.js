import { createSlice } from "@reduxjs/toolkit";
import { getNew } from "../actions/Blogs";

const initialState = {
  new: [],
  loading: "idle",
  error: null,
  totalPages: 0,
};

const newSlice = createSlice({
  name: "new",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // eslint-disable-next-line no-unused-vars
      .addCase(getNew.pending, (state, action) => {
        return {
          ...state,
          loading: "pending",
        };
      })
      .addCase(getNew.fulfilled, (state, { payload }) => {
        return {
          ...state,
          loading: "success",
          new: payload.results,
          totalPages: Math.ceil(payload.count / 6),
        };
      })
      .addCase(getNew.rejected, (state, { payload }) => {
        return {
          ...state,
          loading: "failed",
          error: payload,
        };
      });
  },
});

export const New = (state) => state.new.new;
export const Status = (state) => state.new.loading;
export const Error = (state) => state.new.error;
export const TotalPages = (state) => state.new.totalPages;

export default newSlice.reducer;
