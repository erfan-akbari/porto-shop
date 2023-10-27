import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleProduct = createAsyncThunk(
    "singleProduct/getSingleProduct",
    async (url) => {
        return axios.get(url)
            .then(({ data }) => data)
    }
)

const slice = createSlice({
    name: "singleProduct",
    initialState: [],
    reducers: {},
    extraReducers: {
        [getSingleProduct.fulfilled]: (state, action) => {
            return action.payload
        }
    }
})


export default slice.reducer