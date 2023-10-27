import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCatProducts = createAsyncThunk(
    "CatProducts/getAllCatProducts",
    async (url) => {
        return axios.get(url)
        .then(({data}) => data)
    }
)

const slice = createSlice({
    name: "CatProducts",
    initialState: [],
    reducers: {},
    extraReducers: {
        [getAllCatProducts.fulfilled]: (state, action) => {
            return action.payload
        }
    }
})

export default slice.reducer