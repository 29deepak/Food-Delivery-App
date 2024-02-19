import { createSlice } from "@reduxjs/toolkit";

const updatePizzaSlice = createSlice(
    {
        name: "updatepizza",
        initialState: {},
        reducers: {
            UPDATE_PIZZABYID_REQUEST: (state, action) => {
                return {
                    ...state,
                    updateloading: true
                }
            },
            UPDATE_PIZZABYID_SUCCESS: (state, action) => {
                console.log(action)
                return {
                    updatesuccess: true,
                    updateloading: false
                }
            },
            UPDATE_PIZZABYID_FAIL: (state, action) => {
                return {
                    updateloading: false,
                    updateerror: action.payload
                }
            }
        }

    }
)
export const { UPDATE_PIZZABYID_REQUEST, UPDATE_PIZZABYID_SUCCESS, UPDATE_PIZZABYID_FAIL } = updatePizzaSlice.actions

export default updatePizzaSlice.reducer