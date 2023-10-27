import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBlogs = createAsyncThunk(
    "Blogs/getAllBlogs",
    async (url) => {
        return axios.get(url)
            .then(({ data }) => data)
    }
)

const slice = createSlice({
    name: "Blogs",
    initialState: [],
    reducers: {},
    extraReducers: {
        [getAllBlogs.fulfilled]: (state, action) => {
            return action.payload
        }
    }
})

export default slice.reducer