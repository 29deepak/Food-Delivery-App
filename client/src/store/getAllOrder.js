import { createSlice } from "@reduxjs/toolkit";

const allOrderSlice = createSlice(
    {
        name: "allOrder",
        initialState: {
            loading: false,
            orders: []
        },
        reducers: {
            all_order_request: (state, action) => {
                return {
                    loading: true,
                    orders: []
                }
            },
            all_order_success: (state, action) => {
                return {
                    loading: false,
                    success: true,
                    orders: action.payload
                }
            },
            all_order_fail: (state, action) => {
                return {
                    loading: false,
                    error: action.payload
                }
            }
        }
    }
)

export const { all_order_request, all_order_success, all_order_fail } = allOrderSlice.actions;
export default allOrderSlice.reducer;