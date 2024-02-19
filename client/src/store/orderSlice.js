import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice(
    {
        name: "order",
        initialState: {},
        reducers: {
            place_order_request: (state, action) => {
                return {
                    loading: true
                }
            },
            place_order_success: (state, action) => {
                return {
                    loading: false,
                    success: true
                }
            },
            place_order_fail: (state, action) => {
                return {
                    loading: false,
                    error: action.payload
                }
            }
        }
    }
)

export const { place_order_request, place_order_success, place_order_fail } = orderSlice.actions;
export default orderSlice.reducer;