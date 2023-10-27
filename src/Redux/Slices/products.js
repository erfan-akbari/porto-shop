import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
    "Products/getAllProducts",
    async (url) => {
        return axios.get(url)
            .then(({ data }) => data)
    }
)

const slice = createSlice({
    name: "Products",
    initialState: [],
    reducers: {},
    extraReducers: {
        [getAllProducts.fulfilled]: (state, action) => {
            return action.payload
        }
    }
})

export default slice.reducer