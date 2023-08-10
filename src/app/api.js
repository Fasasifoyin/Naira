import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("nairatoken")) {
    req.headers.Authorization = `Token ${localStorage.getItem("nairatoken")}`;
  }

  return req;
});

export const signUp = (form) => API.post("/api/auth/users/", form);
export const signIn = (form) => API.post("/api/auth/token/login/", form);

export const trendingBlogs = (page) => API.get(`api/trending/?page=${page}`);
export const newBlogs = (page) => API.get(`api/latest/?page=${page}`);

export const singleBlog = (id) => API.get(`api/single-post/${id}`);

export const createNewBlog = (formData) =>
  API.post("/api/create/", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
