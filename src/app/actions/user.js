import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
import { toast } from "react-hot-toast";

export const signup = createAsyncThunk(
  "/user/signup",
  async (formData, { rejectWithValue }) => {
    const { navigate, password, username } = formData;
    let token;
    try {
      const { data, status } = await api.signUp(formData);
      if (status === 201) {
        const { data: loginData, status: loginStatus } = await api.signIn({
          username,
          password,
        });
        if (loginStatus === 200) {
          token = loginData.auth_token;
          localStorage.setItem("nairatoken", loginData?.auth_token);
          toast.success("Sign up successful");
          navigate("/");
        }
      }
      return { ...data, token };
    } catch (error) {
      console.log(error);
      const outputError =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      toast.error(outputError);
      return rejectWithValue(outputError);
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
      console.log(error)
      const outputError =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      toast.error(outputError);
      return rejectWithValue(outputError);
    }
  }
);
