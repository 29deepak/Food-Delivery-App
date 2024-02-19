import React, { useState } from 'react'
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { user_register_fail, user_register_request, user_register_success } from '../store/registerSlice';

const Register = () => {
    const dispatch = useDispatch()
    const registerUser = useSelector(state => state.register)
    console.log(registerUser)
    const [value, setValue] = useState(
        {
            name: "",
            email: "",
            password: ""
        }
    )
    const handler = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = async () => {
        console.log(value)
        dispatch(user_register_request())
        try {
            const res = await axios.post("http://localhost:4000/register", value)
            dispatch(user_register_success())
        } catch (error) {
            dispatch(user_register_fail(error))
        }
    }

    return (
        <form>
            <div class="row mb-3">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" value={value.name} name="name" onChange={handler} />
                </div>
            </div>
            <div class="row mb-3">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" value={value.email} name="email" onChange={handler} />
                </div>
            </div>
            <div class="row mb-3">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" name="password" value={value.password} onChange={handler} />
                </div>
            </div>


            <button type="submit" class="btn btn-primary " onClick={submitHandler}>Sign in</button>
        </form>
    )
}

export default Register