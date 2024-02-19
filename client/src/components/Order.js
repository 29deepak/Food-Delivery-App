import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import moment from 'moment/moment'
import { user_order_fail, user_order_request, user_order_success } from '../store/orderFetchSlice'
const Order = () => {
    const dispatch = useDispatch()
    const { loading, orders } = useSelector(state => state.orderUser)
    console.log(loading, "fcnmxdnc", orders)
    const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null
    console.log(currentUser)
    useEffect(() => {
        dispatch(user_order_request())
        const fetchOrder = async () => {
            const alUserOrderData = await axios.post('http://localhost:4000/allorders', { userId: currentUser.id })
            return alUserOrderData
        }
        fetchOrder().then((res) => {
            // console.log(res.data)
            dispatch(user_order_success(res.data))
        }).catch((err) => {
            dispatch(user_order_fail(err))
        })
    }, [])
    return (
        <>
            <h1 className='text-center'>Order Screen</h1>
            {
                loading && <div class="spinner-border d-flex center" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            }
            {
                orders && orders.map((order) => {
                    return (

                        <div className="row">
                            <div className='col-4'>
                                {
                                    order.orderItems.map((item) => {
                                        return (
                                            <div className='d-flex '>

                                                <img src={item.image} class="img-order" alt="..." />
                                                <h6>{item.name} [{item.varients}] * {item.quantity} ={" "}{item.price}</h6>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className='col-4'>
                                <h4>Shipping Address: {order.shippingAddress}</h4>
                                <h4>{moment(order.updatedAt).calendar()}</h4>
                            </div>
                            <div className='col-4'>
                                <h4>order Info</h4>
                                <h6>Order Amount:{order.orderAmount}</h6>
                                <h6>Transaction Id:{order.transactionId}</h6>
                                <h6>Order Id :{order.orderId}</h6>

                            </div>
                            <hr />
                        </div>
                    )
                })
            }
        </>

    )
}

export default Order