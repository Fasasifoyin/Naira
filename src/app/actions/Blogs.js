import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getTrending = createAsyncThunk(
  "/trend/getTrending",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.trendingBlogs();
      console.log(data)
      return data;
    } catch (error) {
      console.log(error);
      const outputError =
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message;
      return rejectWithValue(outputError);
    }
  }
);

export const getNew = createAsyncThunk(
  "/new/getNew",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.newBlogs();
      return data;
    } catch (error) {
      console.log(error);
      const outputError =
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message;
      return rejectWithValue(outputError);
    }
  }
);

export const getSingle = createAsyncThunk(
  "/single/getSingle",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.singleBlog(id);
      return data;
    } catch (error) {
      console.log(error);
      const outputError =
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message;
      return rejectWithValue(outputError);
    }
  }
);

export const create = createAsyncThunk(
  "/create/create", 
  async (formData, { rejectWithValue }) => {
    try{
      console.log(formData)
      // const { tags, images, title, story} = formData
      // const { data } = await api.createNewBlog({tags, images, title, story})
      // console.log(data)
    }catch(error){
      console.log(error);
      const outputError =
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message;
      return rejectWithValue(outputError);
    }
  }
)
