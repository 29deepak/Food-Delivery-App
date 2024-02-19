import { createSlice } from "@reduxjs/toolkit";

const orderFetchSlice = createSlice(
    {
        name: "orderUser",
        initialState: {
            orders: []
        },
        reducers: {
            user_order_request: (state, action) => {
                return {
                    loading: true
                }
            },
            user_order_success: (state, action) => {
                return {
                    loading: false,
                    success: true,
                    orders: action.payload
                }
            },
            user_order_fail: (state, action) => {
                return {
                    loading: false,
                    error: action.payload
                }
            }
        }
    }
)

export const { user_order_request, user_order_success, user_order_fail } = orderFetchSlice.actions;
export default orderFetchSlice.reducer;