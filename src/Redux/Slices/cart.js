import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "Cart",
    initialState: {
        cart: []
    },
    reducers: {
        setCartInit: (state, action) => {
            if (state.cart.length === 0) {
                state.cart.push(...action.payload)
            }
        },
        addCartData: (state, action) => {
            let cart = [...state.cart]
            const isInCart = cart.some(item => item.id === action.payload.id)
            if (!isInCart) {
                state.cart.push(action.payload)
                localStorage.setItem("cartData", JSON.stringify(state.cart))
            } else {
                const indexProductInCart = cart.findIndex(item => item.id === action.payload.id)
                state.cart[indexProductInCart].count += +action.payload.count
            }
        },
        removeInCart: (state, action) => {
            const newState = state.cart.filter(product => product.id !== action.payload)
            localStorage.setItem("cartData", JSON.stringify(newState))
            state.cart = newState
        }
    }
})

export const { removeInCart, addCartData, setCartInit } = slice.actions;
export default slice.reducer;