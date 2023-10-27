import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMenusData = createAsyncThunk(
    "Menus/getMenusData",
    async (url) => {
        return axios.get(url)
            .then(({data}) => data)
    }
)

const slice = createSlice({
    name: "Menus",
    initialState: [],
    reducers: {},
    extraReducers: {
        [getMenusData.fulfilled]: (state, action) => {
            return action.payload
        }
    }
})

export default slice.reducer