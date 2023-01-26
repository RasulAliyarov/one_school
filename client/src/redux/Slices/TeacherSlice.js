import { createSlice } from "@reduxjs/toolkit";

const TeacherSlice = createSlice({
    name: "teacher",
    initialState: {
        addToCartState: false,
        cart: []
    },
    reducers: {
        cartState: (state, action) => {
            state.addToCartState = action.payload
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        }
    }
})

export const { cartState, addToCart } = TeacherSlice.actions
export default TeacherSlice