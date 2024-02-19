import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { user_login_request, user_login_success, user_login_fail } from '../store/loginSlice'
import axios from 'axios'
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [value, setValue] = useState(
        {
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
        dispatch(user_login_request())
        try {
            const res = await axios.post("http://localhost:4000/login", value);
            dispatch(user_login_success(res.data))
            localStorage.setItem('currentUser', JSON.stringify(res.data))
            navigate("/")
        } catch (err) {
            dispatch(user_login_fail())
        }

    }

    return (
        <form>

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

export default Login