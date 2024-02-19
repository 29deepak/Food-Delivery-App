import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            cartItems: []
        },
        reducers: {
            addToCart: (state, action) => {
                console.log(action.payload)
                const alreadyExists = state.cartItems.find(item => item.id === action.payload.id)
                if (alreadyExists) {
                    console.log("-------------------------------------")
                    state.cartItems = state.cartItems.map((item) => item.id === action.payload.id ? action.payload : item)
                }
                else {

                    state.cartItems = [...state.cartItems, action.payload]
                }
            },
            deleteCart: (state, action) => {
                console.log("deletecart", action.payload)
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
            },
            emptyCart: (state, action) => {
                state.cartItems = []
            }
        }
    }
)

export const { addToCart, deleteCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;