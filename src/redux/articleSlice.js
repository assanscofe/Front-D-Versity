import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../services/api";

export const getArticle = createAsyncThunk(
  "article/getData",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await api.get("/articles/");
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const getArticleById = createAsyncThunk(
  "article/getDataById",
  async (idArticle, { rejectWithValue }) => {
    try {
      const response = await api.get("articles/" + idArticle);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
export const addArticle = createAsyncThunk(
  "article/addData",
  async (
    articleName,
    articleContent,
    articleImage,
    user,
    passion,
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post("/articles/", {
        articleName,
        articleContent,
        articleImage,
        user,
        passion,
      });
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  data: [],
  dataById: [],
  newData: [],
  isSuccess: false,
  loading: false,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    // getAllSuccess: (state, action) => {
    //     state.push(action.payload)
    // }
  },
  extraReducers: {
    [getArticle.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getArticle.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.isSuccess = true;
    },
    [getArticle.rejected]: (state, { payload }) => {
      state.loading = true;
    },
    [getArticleById.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getArticleById.fulfilled]: (state, { payload }) => {
      state.dataById = payload;
      state.loading = false;
      state.isSuccess = true;
    },
    [getArticleById.rejected]: (state, { payload }) => {
      state.loading = true;
    },
    [addArticle.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [addArticle.fulfilled]: (state, { payload }) => {
      state.newData = payload;
      state.loading = false;
      state.isSuccess = true;
    },
    [addArticle.rejected]: (state, { payload }) => {
      state.loading = true;
    },
  },
});

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

export default articleSlice.reducer;
