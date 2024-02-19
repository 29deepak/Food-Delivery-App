import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

const Pizza = ({ data }) => {
    const dispatch = useDispatch()
    const pizza = useSelector(state => state.cart)
    console.log("edfcnmx", pizza.cartItems)
    const [varients, setVarients] = useState("small")
    const [quantity, setQuantity] = useState(1)
    const [showModal, setShowModal] = useState(false)
    const handleSelect = (e) => {
        console.log("dcn ", e.target.value)
        setVarients(e.target.value)
    }
    const handleQuantity = (e) => {
        console.log("dbc", e.target.value)
        setQuantity(e.target.value)
    }
    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }
    const cartHandler = (data) => {
        console.log("data", data)
        const cartItems = {
            name: data.name,
            id: data.id,
            image: data.images,
            varients: varients,
            quantity: quantity,
            prices: data.prices,
            price: data.prices[0][varients] * quantity
        }
        dispatch(addToCart(cartItems))
        // localStorage.setItem("cartItems", JSON.stringify(pizza.cartItems))
    }

    return (

        <div class="card" style={{ width: "18rem" }}>
            <img src={data.images} class="card-img-top" alt="..." onClick={openModal} />
            <div class="card-body">
                <div className='row'>
                    <div class="col-6">

                        <div className='d-flex' >
                            <h3>Varients</h3>

                            <select class="form-select" style={{ width: "100px" }} aria-label="Default select example" onChange={handleSelect}>
                                {
                                    data.variants.map((n, i) => {
                                        return (
                                            <option value={n}>{n}</option>
                                        )
                                    })
                                }

                            </select>
                        </div>
                        <div className='d-flex'>
                            <h4>Quantity</h4>
                            <select class="form-select" style={{ width: "100px" }} aria-label="Default select example" onChange={handleQuantity}>

                                {


                                    [...Array(10).keys()].map((n) => {
                                        return (

                                            <option value={n + 1}>{n + 1}</option>
                                        )
                                    })
                                }

                            </select>

                        </div>
                    </div>
                    <div className='d-flex'>
                        <h4>Price:</h4>
                        {
                            data.prices[0][varients] * quantity
                        }/Rs


                    </div>
                    <button className='btn btn-secondary' onClick={() => cartHandler(data)}> Add to Cart</button>

                </div>
            </div>
            <div class={`modal  ${showModal ? 'show d-block' : ''} fade `} id="exampleModal" tabindex="-1" onClick={closeModal} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{data.name}</h1>
                            <button type="button" onClick={closeModal} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src={data.images} class="card-img-top" alt="..." />
                            <h4>Description</h4>
                            <p>{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Pizza