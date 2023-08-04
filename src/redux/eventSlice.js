import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../services/api'


export const getEvent = createAsyncThunk('event/getData', async (arg, { rejectWithValue }) => {
    try {
        const response = await api.get('/events/')
        return response.data
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

export const getEventById = createAsyncThunk('event/getDataById', async (idEvent, { rejectWithValue }) => {
    try {
        const response = await api.get('events/' + idEvent)
        return response.data
    } catch (error) {
        rejectWithValue(error.response.data)

    }
})
export const createEvent = createAsyncThunk('event/getDataById', async (eventName,
    coverPhoto,
    startDate,
    endDate,
    startTime,
    endTime,
    location,
    description,
    user,
    passion, { rejectWithValue }) => {
    try {
        const response = await api.post('/events/', {
            eventName,
            coverPhoto,
            startDate,
            endDate,
            startTime,
            endTime,
            location,
            description,
            user,
            passion
        })
        return response.data
    } catch (error) {
        rejectWithValue(error.response.data)

    }
})

// export const createEvent = createAsyncThunk('event/createData', async(
//     data,
//     { rejectWithValue }) => {
//     try {
//         const response = await api.post('/events/', {
//             eventName,
//             coverPhoto,
//             startDate,
//             endDate,
//             startTime,
//             endTime,
//             location,
//             description,
//             user,
//             passion
//         })
//         return response.data
//     } catch (error) {
//         rejectWithValue(error.response.data)
//     }
// })

const initialState = {
    data: [],
    dataById: [],
    newData: [],
    isSuccess: false,
    loading: false
}

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        // getAllSuccess: (state, action) => {
        //     state.push(action.payload)
        // }
    },
    extraReducers: {
        [getEvent.pending]: (state, { payload }) => {
            state.loading = true
        },
        [getEvent.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.loading = false;
            state.isSuccess = true;
        },
        [getEvent.rejected]: (state, { payload }) => {
            state.loading = true
        },
        [getEventById.pending]: (state, { payload }) => {
            state.loading = true
        },
        [getEventById.fulfilled]: (state, { payload }) => {
            state.dataById = payload;
            state.loading = false;
            state.isSuccess = true;
        },
        [getEventById.rejected]: (state, { payload }) => {
            state.loading = true
        },
        [createEvent.pending]: (state, { payload }) => {
            state.loading = true
        },
        [createEvent.fulfilled]: (state, { payload }) => {
            state.newData = payload;
            state.loading = false;
            state.isSuccess = true;
        },
        [createEvent.rejected]: (state, { payload }) => {
            state.loading = true
        }
    }
})

// export const {
//     getAllSuccess
// } = eventSlice.actions

// export const getAllEvent = () => async (dispatch) => {
//     try {
//         const response = await api.get('/events/')
//         console.log(response)
//         dispatch(getAllSuccess(response.data))
//     } catch (error) {
//         console.log(error)
//     }
// }

export default eventSlice.reducer