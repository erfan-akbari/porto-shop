import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "Wishlist",
    initialState: {
        wishlist: []
    },
    reducers: {
        setWishlistInit: (state, action) => {
            state.wishlist.push(...action.payload)
        },
        addToWishlist: (state, action) => {
            state.wishlist.push(action.payload)
            localStorage.setItem("wishlistData", JSON.stringify(state.wishlist))
        },
        removeInWishlist: (state, action) => {
            const newState = state.wishlist.filter(product => product.id !== action.payload)
            localStorage.setItem("wishlistData", JSON.stringify(newState))
            state.wishlist = newState
        },
    }
})

export const { addToWishlist, removeInWishlist, setWishlistInit } = slice.actions;
export default slice.reducer;