import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/api";

export const getUserById = createAsyncThunk(
  "user/getDataById",
  async (idUser, { rejectWithValue }) => {
    try {
      const response = await api.get("/users/" + idUser);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "users/getData",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await api.get("/users/");
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  error: null,
  signupSuccess: false,
  signupError: null,
  signupLoading: false,
  formDataUser: {},
  dataById: {},
  dataAllUser: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authRequest: (state) => {
      state.isLoading = true;
    },
    authSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
      state.signupSuccess = false;
      state.signupLoading = false;
      state.signupError = null;
    },
    authError: (state, action) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.user = null;
      // state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    signupRequest: (state) => {
      state.signupLoading = true;
    },
    signupSuccess: (state) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.user = null;
      state.signupSuccess = true;
      state.signupLoading = false;
      state.signupError = null;
    },
    signupError: (state, action) => {
      state.signupSuccess = false;
      state.signupLoading = false;
      state.signupError = action.payload;
    },
    addFormData: (state, action) => {
      Object.assign(state.formDataUser, action.payload);
    },
  },
  extraReducers: {
    [getUserById.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserById.fulfilled]: (state, action) => {
      state.dataById = action.payload;
      state.loading = false;
      state.isSuccess = true;
    },
    [getUserById.rejected]: (state, action) => {
      state.loading = true;
    },
    [getUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.dataAllUser = action.payload;
      state.loading = false;
      state.isSuccess = true;
    },
    [getUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const {
  authRequest,
  authSuccess,
  authError,
  logoutSuccess,
  signupRequest,
  signupSuccess,
  signupError,
  addFormData,
} = authSlice.actions;

export const login = (email, password, navigate) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const response = await api.post("login/", {
      email,
      password,
    });
    console.log(response);
    if (response) {
      console.log("success");
      localStorage.setItem("access_token", response.data.tokens.access);
      dispatch(authSuccess(response.data));
      navigate("/");
    }
  } catch (error) {
    dispatch(authError(error.response));
  }
};

export const signup = (data, navigate) => async (dispatch) => {
  dispatch(signupRequest());
  try {
    const response = await api.post("signup/", data);
    if (response) {
      dispatch(signupSuccess(response.data));
      navigate("/");
    }
  } catch (error) {
    dispatch(signupError(error.response.data));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("access_token");
  dispatch(logoutSuccess());
};

export default authSlice.reducer;
