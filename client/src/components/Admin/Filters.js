import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GET_PIZZAS_FAIL, GET_PIZZAS_REQUEST, GET_PIZZAS_SUCCESS } from '../../store/pizzaSlice'
import axios from 'axios'

const Filters = () => {
    const dispatch = useDispatch()
    const [searchKey, setSearchKey] = useState("");
    const [category, setCategory] = useState("all");

    const handleFilter = async (searchKey, category) => {
        let filteredPizza;
        try {

            dispatch(GET_PIZZAS_REQUEST())
            const res = await axios.get("http://localhost:4000/allpizza")
            filteredPizza = res.data.filter(pizza => pizza.name.toLowerCase().includes(searchKey))
            if (category !== "all") {
                filteredPizza = res.data.filter(pizza => pizza.category.toLowerCase() === category)
            }
            setCategory(category)
            setSearchKey(searchKey)
            dispatch(GET_PIZZAS_SUCCESS(filteredPizza))

        } catch (err) {
            dispatch(GET_PIZZAS_FAIL(err))
        }

    }
    return (
        <>
            <form class="row g-3 text-center" style={{ width: "700px" }}>
                <div class="col-md-5">
                    <input type="text" value={searchKey} class="form-control m-4" id="search" onChange={(e) => setSearchKey(e.target.value)} placeholder='Search Pizza' />
                </div>
                <div class="col-md-5">
                    <select class="form-select m-4" value={category} id="select" onChange={(e) => setCategory(e.target.value)}>
                        <option value="all" >All</option>
                        <option value="veg" >veg</option>
                        <option value="nonveg">nonveg</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <button type="submit" class="btn btn-primary m-4" onClick={() => handleFilter(searchKey, category)}>Search</button>
                </div>
            </form>
        </>
    )
}

export default Filters