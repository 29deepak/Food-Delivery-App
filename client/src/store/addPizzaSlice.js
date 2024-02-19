import { createSlice } from "@reduxjs/toolkit";

const addPizzaSlice = createSlice(
    {
        name: "addpizza",
        initialState: {
        },
        reducers: {
            ADD_PIZZAS_REQUEST: (state, action) => {
                return { ...state }
            },
            ADD_PIZZAS_SUCCESS: (state, action) => {
                return {
                    state: { msg: "successfull" }
                }
            },
            ADD_PIZZAS_FAIL: (state, action) => {
                return {
                    error: action.payload
                }
            }
        }
    }
)
export const { ADD_PIZZAS_REQUEST, ADD_PIZZAS_SUCCESS, ADD_PIZZAS_FAIL } = addPizzaSlice.actions

export default addPizzaSlice.reducer