import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../services/api'

const initialState = {
    data: [],
    formData: {},
    isSuccess: false,
    loading: false
}

export const getPassion = createAsyncThunk('passion/getData', async (arg, { rejectWithValue }) => {
    try {
        const response = await api.get('/passions/')
        return response.data
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const createPassion = createAsyncThunk('passion/create', async (
    passionName,
    passionDescription,
    passionImage, { rejectWithValue }) => {
    try {
        const response = await api.post('/passions/', {
            passionName,
            passionDescription,
            passionImage
        })
        return response.data
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})


const passionSlice = createSlice({
    name: 'passion',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getPassion.pending]: (state, { payload }) => {
            state.loading = true
        },
        [getPassion.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.loading = false;
            state.isSuccess = true;
        },
        [getPassion.rejected]: (state, { payload }) => {
            state.loading = true
        }
    }
})
// export const {
//     addFormData,
// } = passionSlice.actions;


export default passionSlice.reducer