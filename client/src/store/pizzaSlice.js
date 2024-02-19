import { createSlice } from "@reduxjs/toolkit";

const pizzaSlice = createSlice(
    {
        name: "pizza",
        initialState: {
            loading: false,
            apiData: []
        },
        reducers: {
            GET_PIZZAS_REQUEST: (state, action) => {
                return {
                    ...state,
                    loading: true
                }
            },
            GET_PIZZAS_SUCCESS: (state, action) => {
                return {
                    loading: false,
                    apiData: action.payload
                }
            },
            GET_PIZZAS_FAIL: (state, action) => {
                return {
                    loading: false,
                    error: action.payload
                }
            }
        }
    }
)
export const { GET_PIZZAS_REQUEST, GET_PIZZAS_SUCCESS, GET_PIZZAS_FAIL } = pizzaSlice.actions

export default pizzaSlice.reducer