import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleBlog = createAsyncThunk(
    "singleBlog/getSingleBlog",
    async (url) => {
        return axios.get(url)
            .then(({ data }) => data)
    }
)

const slice = createSlice({
    name: "singleBlog",
    initialState: [],
    reducers: {},
    extraReducers: {
        [getSingleBlog.fulfilled]: (state, action) => {
            return action.payload
        }
    }
})


export default slice.reducer