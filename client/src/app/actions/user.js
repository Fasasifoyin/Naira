import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
import { toast } from "react-hot-toast";

export const signup = createAsyncThunk(
  "/user/signup",
  async (formData, { rejectWithValue }) => {
    const { navigate } = formData;
    try {
      const { data, status } = await api.signUp(formData);
      if (status === 201) {
        toast.success("Sign up successful");
        navigate("/login");
      }
      return data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      // rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "/user/login",
  async (formData, { rejectWithValue }) => {
    const { navigate, remember, username, password } = formData;
    try {
      const { data, status } = await api.signIn({ username, password });
      if (status === 200) {
        toast.success(`Welcome, ${username}`);
        navigate("/");
        if (remember.length > 0) {
          localStorage.setItem(
            "remember",
            JSON.stringify({ username, password })
          );
        } else {
          localStorage.getItem("remember") &&
            localStorage.removeItem("remember");
        }
      }
      return data;
    } catch (error) {
      const outputError =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      console.log(error);
      toast.error(outputError);
      // rejectWithValue(error.response.data.message);
    }
  }
);
