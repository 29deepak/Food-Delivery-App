import { createSlice } from "@reduxjs/toolkit";
const registerSlice = createSlice({
    name: "register",
    initialState: {},
    reducers: {
        user_register_request: (state, action) => {
            return {
                loading: true
            }
        },
        user_register_success: (state, action) => {
            return {
                loading: false,
                success: true
            }
        },
        user_register_fail: (state, action) => {
            return {
                loading: false,
                error: action.payload
            }
        }
    }
})

export const { user_register_request, user_register_success, user_register_fail } = registerSlice.actions;

export default registerSlice.reducer;