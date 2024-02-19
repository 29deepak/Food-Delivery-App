import { createSlice } from "@reduxjs/toolkit";

const getUserByIdSlice = createSlice(
    {
        name: "getuserbyid",
        initialState: {},
        reducers: {
            GET_USERBYID_REQUEST: (state, action) => {
                return {
                    ...state,
                    loading: true
                }
            },
            GET_USERBYID_SUCCESS: (state, action) => {
                console.log(action)
                return {
                    user: action.payload,
                    loading: false
                }
            },
            GET_USERBYID_FAIL: (state, action) => {
                return {
                    loading: false,
                    error: action.payload
                }
            }
        }
    }
)
export const { GET_USERBYID_REQUEST, GET_USERBYID_SUCCESS, GET_USERBYID_FAIL } = getUserByIdSlice.actions

export default getUserByIdSlice.reducer