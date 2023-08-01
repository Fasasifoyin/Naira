import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export const signUp = (form) => API.post("/api/auth/users/", form);
export const signIn = (form) => API.post("/api/auth/token/login/", form);
