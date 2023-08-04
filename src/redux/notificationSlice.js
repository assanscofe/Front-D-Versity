import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/api";

export const getNotificationById = createAsyncThunk(
  "notif/getDataById",
  async (idUser, { rejectWithValue }) => {
    try {
      const response = await api.get("/userNotifications/" + idUser);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const getNotification = createAsyncThunk(
  "notif/getData",
  async (idUser, { rejectWithValue }) => {
    try {
      const response = await api.get("/notifications/");
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const addNotification = createAsyncThunk(
  "notif/addData",
  async (message, sender, receiver, is_read, { rejectWithValue }) => {
    try {
      const response = await api.post("/notifications/", {
        message,
        sender,
        receiver,
        is_read,
      });
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  data: [],
  dataById: null,
  isSuccess: false,
  loading: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: {
    [getNotificationById.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getNotificationById.fulfilled]: (state, { payload }) => {
      state.dataById = payload;
      state.loading = false;
      state.isSuccess = true;
    },
    [getNotificationById.rejected]: (state, { payload }) => {
      state.loading = true;
    },
    [getNotification.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getNotification.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.isSuccess = true;
    },
    [getNotification.rejected]: (state, { payload }) => {
      state.loading = true;
    },
    [addNotification.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [addNotification.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.isSuccess = true;
    },
    [addNotification.rejected]: (state, { payload }) => {
      state.loading = true;
    },
  },
});

export default notificationSlice.reducer;
