import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { GET_USERBYID_FAIL, GET_USERBYID_REQUEST, GET_USERBYID_SUCCESS } from '../../store/getUserByIdSlice'
const UserEdit = () => {
    const dispatch = useDispatch()
    const userDataById = useSelector(state => state.getUserById)
    console.log("-----", userDataById)
    const { userId } = useParams()
    console.log("rfvnmfjc", userId)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        if (userDataById?.user) {
            console.log("uujujjjjjj", userId, "params", userDataById)
            if (Number(userDataById.user.id) === Number(userId)) {
                console.log("--------------------------")
                setName(userDataById.user.name)
                setEmail(userDataById.user.email)
                setIsAdmin(userDataById.user.isAdmin)
            }
            else {
                axios.post("http://localhost:4000/getuserbyid", { userId: userId }).then((res) => {
                    dispatch(GET_USERBYID_SUCCESS(res.data))
                }).catch((err) => {
                    dispatch(GET_USERBYID_FAIL(err))
                })
            }
        }
        else {

            axios.post("http://localhost:4000/getuserbyid", { userId: userId }).then((res) => {
                dispatch(GET_USERBYID_SUCCESS(res.data))
            }).catch((err) => {
                dispatch(GET_USERBYID_FAIL(err))
            })
        }
    }, [dispatch, userDataById])
    const updateUserButton = () => {
        let updatedUser = {
            id: userId,
            name: name,
            email: email,
            isAdmin: isAdmin
        }
        axios.post("http://localhost:4000/updateuserbyid", updatedUser).then(() => {
            console.log("updated succesful")
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <form class="row g-3">
            <div class="col-md-6">
                <label for="name" class="form-label">Name</label>
                <input type="text" value={name} class="form-control" id="name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="col-md-6">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e) => setIsAdmin(e.target.checked)} checked={isAdmin} />
                <label class="form-check-label" for="flexCheckDefault">
                    Admin
                </label>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary" onClick={() => updateUserButton()}>update User</button>
            </div>
        </form>
    )
}

export default UserEdit