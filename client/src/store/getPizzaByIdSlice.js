import { createSlice } from "@reduxjs/toolkit";

const getPizzaByIdSlice = createSlice(
    {
        name: "getpizzabyid",
        initialState: {},
        reducers: {
            GET_PIZZABYID_REQUEST: (state, action) => {
                return {
                    ...state,
                    loading: true
                }
            },
            GET_PIZZABYID_SUCCESS: (state, action) => {
                console.log(action)
                return {
                    pizza: action.payload,
                    loading: false
                }
            },
            GET_PIZZABYID_FAIL: (state, action) => {
                return {
                    loading: false,
                    error: action.payload
                }
            }
        }
    }
)
export const { GET_PIZZABYID_REQUEST, GET_PIZZABYID_SUCCESS, GET_PIZZABYID_FAIL } = getPizzaByIdSlice.actions

export default getPizzaByIdSlice.reducer