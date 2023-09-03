import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/api";

export const getFollowByUser = createAsyncThunk(
  "follow/getDataById",
  async (idUser, { rejectWithValue }) => {
    try {
      const response = await api.get("/followers/" + idUser);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  isFollowUserSuccess: false,
  isFollowUserLoading: false,
  isUnFollowUserSuccess: false,
  isUnFollowUserLoading: false,
  dataById: null,
  loading: false,
  isSuccess: false,
};

const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {
    followRequest: (state) => {
      state.isLoading = true;
    },
    followSuccess: (state) => {
      state.isSuccess = true;
      state.isLoading = false;
    },
    followError: (state) => {
      state.isSuccess = false;
      state.isLoading = false;
    },
    unFollowRequest: (state) => {
      state.isUnFollowUserLoading = true;
    },
    unFollowSuccess: (state) => {
      state.isUnFollowUserLoading = false;
      state.isUnFollowUserSuccess = true;
    },
    unFollowError: (state) => {
      state.isUnFollowUserLoading = false;
      state.isUnFollowUserSuccess = false;
    },
  },
  extraReducers: {
    [getFollowByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getFollowByUser.fulfilled]: (state, action) => {
      state.dataById = action.payload;
      state.loading = false;
      state.isSuccess = true;
    },
    [getFollowByUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const {
  followRequest,
  followSuccess,
  followError,
  unFollowRequest,
  unFollowError,
  unFollowSuccess,
  getFollowingUser,
} = followSlice.actions;

export const followUser = (following, follower) => async (dispatch) => {
  dispatch(followRequest());
  try {
    const response = await api.post("/followUser/", {
      following,
      follower,
    });
    if (response) {
      dispatch(followSuccess());
    }
  } catch (error) {
    dispatch(followError());
  }
};

export const unFollowUser = (following, follower) => async (dispatch) => {
  dispatch(unFollowRequest());
  try {
    const response = await api.post("/unfollowUser/", { following, follower });
    if (response) {
      dispatch(unFollowSuccess());
    }
  } catch (error) {
    dispatch(unFollowError());
  }
};

export default followSlice.reducer;
