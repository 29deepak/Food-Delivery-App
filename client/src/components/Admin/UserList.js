import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { GET_USERS_SUCCESS, GET_USERS_FAIL, GET_USERS_REQUEST } from '../../store/getAllUserList'
import axios from 'axios'
const UserList = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.allUser)
    console.log("edfcvmfv", users)
    useEffect(() => {
        const fetchData = async () => {
            const allUserData = await axios.get("http://localhost:4000/getallusers")
            return allUserData.data
        }
        fetchData().then((res) => {
            dispatch(GET_USERS_SUCCESS(res))
        }).catch((err) => {
            dispatch(GET_USERS_FAIL(err))
        })
    }, [])
    const userDelete = async (id) => {
        try {
            console.log("edfbvcndmcv ncmcv vncfmcv vcm vcmcv vn", id)
            const deleteuser = await axios.post("http://localhost:4000/deleteuser", { id: id })
            window.location.href = "/admin/userlist"

        } catch (err) {
            console.log(err)
        }

    }
    return (
        <>
            <h1 className='text-center'>USER LIST</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">USER ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((user, index) => {
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><Link to={`/admin/edituserlist/${user.id}`}><AiFillEdit style={{ color: "black", fontsize: "20px" }} /></Link> &nbsp; <MdDelete style={{ color: "brown", fontsize: "20px", cursor: "pointer" }} onClick={() => userDelete(user.id)} /></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default UserList