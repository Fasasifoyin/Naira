import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slice/UserSlice";
import trendReducer from "../Slice/TrendingSlice";
import newReducer from "../Slice/NewSlice";
import detailedReducer from "../Slice/DetailedSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    trend: trendReducer,
    new: newReducer,
    single: detailedReducer,
  },
});
