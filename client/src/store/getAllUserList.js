import { createSlice } from "@reduxjs/toolkit";

const getAllUserList = createSlice(
    {
        name: "allUser",
        initialState: {
            users: []
        },
        reducers: {
            GET_USERS_REQUEST: (state, action) => {
                return { ...state }
            },
            GET_USERS_SUCCESS: (state, action) => {
                return {
                    ...state,
                    users: action.payload
                }
            },
            GET_USERS_FAIL: (state, action) => {
                return {
                    error: action.payload
                }
            }
        }
    }
)
export const { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL } = getAllUserList.actions

export default getAllUserList.reducer