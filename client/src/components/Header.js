import React, { useState } from 'react'
import './Header.css'

import Img1 from '../Images/img.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {

    const cartItems = useSelector(state => state.cart)
    const cartItemsLength = cartItems.cartItems.length
    // const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : null
    // const cartItemsLength = cartItems.length

    const [active, setActive] = useState("/")
    const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null
    console.log(currentUser)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const logOutHandler = () => {
        localStorage.removeItem("currentUser")
        window.location.href = "/login"
    }
    return (
        <>

            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg class="bi me-2" width="40" height="32"></svg>
                    <img src={Img1} class="img-thumbnail1" alt="..."></img>
                </a>

                <ul class="nav nav-pills">
                    <li class="nav-item" onClick={() => setActive("/")}><Link to="/" class={`nav-link ${active === "/" ? 'active' : ""}`} aria-current="page">Home</Link></li>
                    {
                        currentUser?.isAdmin ? <li class="nav-item" onClick={() => setActive("/admin")}><Link to="/admin" class={`nav-link ${active === "/admin" ? 'active' : ""}`} aria-current="page">Admin</Link></li> : ""
                    }
                    {
                        currentUser ? <Link to="" class={`nav-link ${active === "" ? 'active' : ""}`} >
                            <nav className="navbar navbar-expand-lg bg-body-tertiary " style={{ color: "blue" }}>
                                <div className="container-fluid" style={{ color: "blue" }}>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{ color: "blue" }}>
                                            <li className="nav-item dropdown" style={{ color: "blue" }}>
                                                <Link
                                                    className="nav-link dropdown-toggle"
                                                    to="/"
                                                    role="button"
                                                    onClick={handleDropdownToggle}
                                                >
                                                    {currentUser.name}
                                                </Link>
                                                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} style={{ color: "blue" }}>
                                                    <li>
                                                        <Link className="dropdown-item" to="/order">
                                                            Order
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="" onClick={logOutHandler}>
                                                            LogOut
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>




                        </Link> : <>
                            <li class="nav-item" onClick={() => setActive("/login")}><Link to="/login" class={`nav-link ${active === "/login" ? 'active' : ""}`} aria-current="page">Login</Link></li>
                            <li class="nav-item" onClick={() => setActive("/register")}><Link to="/register" class={`nav-link ${active === "/register" ? 'active' : ""}`} aria-current="page">Register</Link></li>
                        </>
                    }

                    <li class="nav-item" onClick={() => setActive("/about")}><Link to="/about" class={`nav-link ${active === "/about" ? 'active' : ""}`} >About Us</Link></li>
                    <li class="nav-item" onClick={() => setActive("/cart")}><Link to="/cart" class={`nav-link ${active === "/cart" ? 'active' : ""}`} aria-current="page">Cart<sup>{cartItemsLength}</sup></Link></li>
                    <li class="nav-item" onClick={() => setActive("/contact")}><Link to="/contact" class={`nav-link ${active === "/contact" ? 'active' : ""}`} >Contact Us</Link></li>
                    <li class="nav-item" onClick={() => setActive("/termsandpolicy")}><Link to="/termsandpolicy" class={`nav-link ${active === "/termsandpolicy" ? 'active' : ""}`} >Terms and Policy</Link></li>
                </ul>
            </header>

        </>
    )
}

export default Header