import { useEffect, useState } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { GET_PIZZABYID_FAIL, GET_PIZZABYID_REQUEST, GET_PIZZABYID_SUCCESS } from '../../store/getPizzaByIdSlice'
import { UPDATE_PIZZABYID_FAIL, UPDATE_PIZZABYID_REQUEST, UPDATE_PIZZABYID_SUCCESS } from '../../store/updatePizzaSlice'


const EditPizza = () => {
    const [name, setName] = useState('')
    const [smallPrice, setSmallPrice] = useState("")
    const [mediumPrice, setMediumPrice] = useState("")
    const [largePrice, setLargePrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const dispatch = useDispatch()
    const userPizzaItemsById = useSelector(state => state.getPizzaById).pizza
    console.log("Rfncdnfcn", userPizzaItemsById)
    const { pizzaId } = useParams()
    // console.log(pizzaId)
    useEffect(() => {
        if (userPizzaItemsById) {

            console.log("fvbncdnc vcm ", typeof pizzaId, "params", pizzaId, typeof userPizzaItemsById.id, "fetch", userPizzaItemsById.id)
            if (Number(userPizzaItemsById.id) === Number(pizzaId)) {
                console.log("--------------------------")
                setName(userPizzaItemsById.name)
                setSmallPrice(userPizzaItemsById.prices[0]["small"])
                setMediumPrice(userPizzaItemsById.prices[0]["medium"])
                setLargePrice(userPizzaItemsById.prices[0]["large"])
                setImage(userPizzaItemsById.images)
                setDescription(userPizzaItemsById.description)
                setCategory(userPizzaItemsById.category)


            }
            else {
                axios.post("http://localhost:4000/getpizzabyid", { pizzaId: pizzaId }).then((res) => {
                    dispatch(GET_PIZZABYID_SUCCESS(res.data))
                }).catch((err) => {
                    dispatch(GET_PIZZABYID_FAIL(err))
                })
            }
        }
        else {

            axios.post("http://localhost:4000/getpizzabyid", { pizzaId: pizzaId }).then((res) => {
                dispatch(GET_PIZZABYID_SUCCESS(res.data))
            }).catch((err) => {
                dispatch(GET_PIZZABYID_FAIL(err))
            })
        }



    }, [dispatch, userPizzaItemsById])

    const submitForm = (e) => {
        e.preventDefault();
        const Updatedpizza = {
            id: pizzaId,
            name, image, description, category,
            prices: {
                small: smallPrice,
                medium: mediumPrice,
                large: largePrice
            }
        }
        axios.post("http://localhost:4000/updatedpizza", Updatedpizza).then(() => {
            dispatch(UPDATE_PIZZABYID_SUCCESS())
        }).catch((err) => {
            dispatch(UPDATE_PIZZABYID_FAIL(err))
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

export default EditPizza