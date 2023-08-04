import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./articleSlice";
import authReducer from "./authSlice";
import eventSlice from "./eventSlice";
import notificationSlice from "./notificationSlice";
import passionSlice from "./passionSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    event: eventSlice,
    passion: passionSlice,
    article: articleSlice,
    notification: notificationSlice,
  },
});
