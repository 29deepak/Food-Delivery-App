import React, { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate()
    const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null
    console.log(currentUser)
    useEffect(() => {
        if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
            navigate("/")
        }
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center bg-dark text-light'>Admin Panel</h1>
                <div className='col-2'>
                    <div class="btn-group-vertical m-5" role="group" aria-label="Vertical button group" style={{ minHeight: "400px", minWidth: "100px" }}>
                        <button type="button" class="btn btn-primary" onClick={() => navigate('/admin/userlist')}>All Users</button>
                        <button type="button" class="btn btn-primary" onClick={() => navigate('/admin/pizzalist')}>All Pizzas</button>
                        <button type="button" class="btn btn-primary" onClick={() => navigate('/admin/addnewpizza')}>Add New Pizzas</button>
                        <button type="button" class="btn btn-primary" onClick={() => navigate('/admin/orderlist')}>All Orders</button>
                    </div>
                </div>
                <div className='col-8'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Admin