import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_PIZZAS_REQUEST, ADD_PIZZAS_SUCCESS, ADD_PIZZAS_FAIL } from '../../store/addPizzaSlice'
import axios from 'axios'
const AddNewPizza = () => {
    const [name, setName] = useState('')
    const [smallPrice, setSmallPrice] = useState("")
    const [mediumPrice, setMediumPrice] = useState("")
    const [largePrice, setLargePrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const dispatch = useDispatch();
    const addPizza = useSelector(state => state.addPizza)
    console.log(addPizza)
    const submitForm = (e) => {
        e.preventDefault();
        const pizza = {
            name, image, description, category,
            prices: {
                small: smallPrice,
                medium: mediumPrice,
                large: largePrice
            }
        }
        axios.post("http://localhost:4000/addpizza", pizza).then(() => {
            dispatch(ADD_PIZZAS_SUCCESS())
        }).catch((err) => {
            dispatch(ADD_PIZZAS_FAIL(err))
        })
    }

    return (
        <>

            <form class="row g-3" onSubmit={submitForm}>
                <div class="col-md-12">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="col-md-4">
                    <label for="smallprice" class="form-label">Small Price</label>
                    <input type="text" class="form-control" id="smallprice" name="smallprice" value={smallPrice} onChange={(e) => setSmallPrice(e.target.value)} />
                </div>
                <div class="col-md-4">
                    <label for="mediumprice" class="form-label">Medium Price</label>
                    <input type="text" class="form-control" id="mediumprice" name='mediumprice' value={mediumPrice} onChange={(e) => setMediumPrice(e.target.value)} />
                </div>
                <div class="col-md-4">
                    <label for="largeprice" class="form-label">Large Price</label>
                    <input type="text" class="form-control" id="largeprice" name="largeprice" value={largePrice} onChange={(e) => setLargePrice(e.target.value)} />
                </div>
                <div class="col-12">
                    <label for="image" class="form-label">Image</label>
                    <input type="text" class="form-control" id="image" placeholder="Add Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <div class="col-12">
                    <label for="description" class="form-label">Description</label>
                    <input type="text" class="form-control" id="description" placeholder="Enter Description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div class="col-12">
                    <label for="category" class="form-label">Category</label>
                    <input type="text" class="form-control" id="category" placeholder="Enter Category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Add New</button>
                </div>
            </form>
        </>
    )
}

export default AddNewPizza