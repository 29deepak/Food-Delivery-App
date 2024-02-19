import React from 'react';
import { LuMinusCircle } from "react-icons/lu";
import { CiCirclePlus } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, deleteCart, emptyCart } from '../store/cartSlice';
import { MdDelete } from "react-icons/md";
import useRazorpay from "react-razorpay";
import axios from 'axios';
import { place_order_fail, place_order_request, place_order_success } from '../store/orderSlice';
const Cart = () => {

    const [Razorpay] = useRazorpay();
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems);
    const order = useSelector(state => state.order)
    console.log("fhvjkc,", order)



    // const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : null
    const subTotal = cartItems.reduce((x, item) => x + item.price, 0)
    console.log("fvhcmdcnv", cartItems)
    const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null
    console.log(currentUser)
    const subHandler = (item) => {
        if (item.quantity <= 1) {

        }
        else {
            const subItem = { ...item, quantity: item.quantity - 1, price: item.prices[0][item.varients] * (item.quantity - 1) }
            dispatch(addToCart(subItem))


        }
    }
    const addHandler = (item) => {
        if (item.quantity >= 10) {
            alert("you exceed your product")
        } else {

            const addItem = { ...item, quantity: item.quantity + 1, price: item.prices[0][item.varients] * (item.quantity + 1) }
            dispatch(addToCart(addItem))
        }
    }
    const deleteItem = (id) => {
        dispatch(deleteCart(id))
    }


    //--------------------------------------------------------------------------------------------------------------------------------------------------------------


    const handlePayment = async (e) => {
        dispatch(place_order_request())
        const cartData = {
            amount: subTotal * 100,
            cartItems: cartItems,
            currentUser: currentUser

        }
        const response = await axios.post("http://localhost:4000/purchase", cartData)
        console.log(response)
        var options = {
            "key": response.data.key_id,
            "order_id": response.data.order.id,
            // handler use for success payment
            "handler": async function (response) {
                const res = await axios.post('http://localhost:4000/updatetransactionstatus', {
                    order_id: options.order_id,
                    payment_id: response.razorpay_payment_id,
                })
                console.log(res)
                dispatch(place_order_success())
                dispatch(emptyCart())

                // alert('You are a premium user Now')
                // localStorage.setItem('token',res.data.token)
            }
        }

        const rzp1 = new Razorpay(options);
        rzp1.open();

        e.preventDefault();
        rzp1.on('payment failed', function (response) {
            console.log(response)
            dispatch(place_order_fail())
            alert('something went wrong')
        })
    };

    return (
        <div class="container text-center">
            <div class="row">
                <h1>My Cart</h1>
                <div class="col">
                    <div class="row">
                        {
                            cartItems.length === 0 ? <h1>you have an empty cart</h1> : <>
                                {cartItems.map((item, index) => {
                                    return <>
                                        <MdDelete className='delete-icon' onClick={() => deleteItem(item.id)} />
                                        <div class="col-4">
                                            <h5>{item.name} [{item.varients}]</h5>
                                            <h6>price:{item.quantity} X {item.prices[0][item.varients]} = {item.price} /Rs</h6>
                                            <h4>Quantity :<LuMinusCircle className='icons-qua' onClick={() => subHandler(item)} /> {item.quantity}<CiCirclePlus className='icons-qua' onClick={() => addHandler(item)} /></h4>
                                        </div>
                                        <div class="col-2">
                                            <img src={item.image} class="card-img-top" alt="..." />
                                        </div>
                                    </>
                                })}

                            </>
                        }

                    </div>
                </div>
                <div class="col">
                    {
                        cartItems.length === 0 ? "" : <>

                            payment Info
                            <h3>Rs {subTotal}/-</h3>
                            <button className='btn btn-primary' onClick={handlePayment} >Checkout</button>
                        </>
                    }


                </div>
            </div>
        </div>

    )
}

export default Cart