import { createSlice } from "@reduxjs/toolkit";
const loginSlice = createSlice({
    name: "login",
    initialState: {},
    reducers: {
        user_login_request: (state, action) => {
            return {
                loading: true
            }
        },
        user_login_success: (state, action) => {
            return {
                loading: false,
                success: true,
                currentUser: action.payload
            }
        },
        user_login_fail: (state, action) => {
            return {
                loading: false,
                error: action.payload
            }
        }
    }
})

export const { user_login_request, user_login_success, user_login_fail } = loginSlice.actions;

export default loginSlice.reducer;