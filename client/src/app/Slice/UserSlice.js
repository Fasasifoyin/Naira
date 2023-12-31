/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "../actions/user";

const initialState = {
  user: localStorage.getItem("nairaIntern")
    ? JSON.parse(localStorage.getItem("nairaIntern"))
    : {},
  token: localStorage.getItem("nairatoken")
    ? localStorage.getItem("nairatoken")
    : "",
  loading: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state, action) => {
        return {
          ...state,
          loading: "pending",
        };
      })
      .addCase(signup.fulfilled, (state, action) => {
        localStorage.setItem("nairaIntern", JSON.stringify(action.payload));
        return {
          ...state,
          loading: "success",
          user: action.payload,
        };
      })
      .addCase(signup.rejected, (state, action) => {
        return {
          ...state,
          loading: "failed",
          error: action.payload,
        };
      })
      .addCase(login.pending, (state, action) => {
        return {
          ...state,
          loading: "pending",
        };
      })
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("nairatoken", action.payload?.auth_token);
        return {
          ...state,
          loading: "success",
          token: action.payload?.auth_token,
        };
      })
      .addCase(login.rejected, (state, action) => {
        return {
          ...state,
          loading: "failed",
          error: action.payload,
        };
      });
  },
});

export const User = (state) => state.user.user;
export const UserLoading = (state) => state.user.loading;
export const UserError = (state) => state.user.error;
export const Token = (state) => state.user.token;

export default userSlice.reducer;
