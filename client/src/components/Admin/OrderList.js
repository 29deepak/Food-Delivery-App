import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { all_order_fail, all_order_request, all_order_success } from '../../store/getAllOrder';
import moment from 'moment/moment'

const OrderList = () => {
    const { loading, orders } = useSelector(state => state.allOrder);
    console.log("fhcj ncm ", loading, orders)
    const dispatch = useDispatch()
    useEffect(() => {

        const allUserOrder = async () => {
            const res = await axios.get("http://localhost:4000/alluserorders")
            return res.data


        }
        // dispatch(all_order_request)
        allUserOrder().then((res) => {
            dispatch(all_order_success(res))
        }).catch((err) => {
            dispatch(all_order_fail(err))
        })
    }, [dispatch])
    const handleDeliver = async (id) => {
        try {
            console.log("dfvb nccxn mx ncm n mc,  mc, ", id)
            const delivered = await axios.post("http://localhost:4000/orderdelivered", { id: id })
            console.log("succesfully delivered", delivered)
            window.location.href = "/admin/orderlist"
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <>
            <h1 className='text-center'>Order List</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Order Id</th>
                        <th scope="col">Email</th>
                        <th scope="col">Transaction ID</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date</th>
                        <th scope="col">TransactionStatus</th>
                        <th scope="col">Delivery Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders && orders.map((order, index) => {
                            return (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.email}</td>
                                    <td>{order.transactionId}</td>
                                    <td>Rs {order.orderAmount}/-</td>
                                    <td>{moment(order.createdAt).calendar()}</td>
                                    <td>{order.status}</td>
                                    <td>{order.isDelivered ? <h6 style={{ color: "green" }}>Delivered</h6> : (
                                        <>
                                            <button className='btn btn-primary' onClick={() => handleDeliver(order.id)}>Deliver</button>
                                        </>
                                    )}</td>


                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default OrderList