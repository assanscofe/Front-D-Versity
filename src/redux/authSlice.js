import { createSlice } from '@reduxjs/toolkit'
import api from '../services/api'

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authRequest: (state) => {
            state.isLoading = true
        },
        authSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.isLoading = false;
            state.user = action.payload;
            state.error = null;
        },
        authError: (state, action) => {
            state.isAuthenticated = false;
            state.isLoading = false;
            state.user = null;
            state.error = action.payload;
        },
        logoutSuccess: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
});

export const {
    authRequest,
    authSuccess,
    authError,
    logoutSuccess,
} = authSlice.actions;

export const login = (email, password, navigate) => async (dispatch) => {
    dispatch(authRequest());
    try {
        const response = await api.post("login/", {
            email,
            password,
        });
        console.log(response)
        if (response) {
            console.log("success")
            localStorage.setItem("access_token", response.data.tokens.access);
            dispatch(authSuccess(response.data))
            navigate('/')
        }
    } catch (error) {
        dispatch(authError(error.response.data));
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("access_token");
    dispatch(logoutSuccess());
};

export default authSlice.reducer