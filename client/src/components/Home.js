import React, { useEffect, useState } from 'react'
import data from './data'
import Pizza from './Pizza'
import axios from 'axios'
// import useFetch from '../hooks/fetch.hook'
import Filters from './Admin/Filters'
import { useSelector, useDispatch } from 'react-redux';
import { GET_PIZZAS_FAIL, GET_PIZZAS_REQUEST, GET_PIZZAS_SUCCESS } from '../store/pizzaSlice'

const Home = () => {
    const dispatch = useDispatch()
    const { loading, apiData } = useSelector(state => state.pizza)
    console.log("loading", loading, apiData)
    // const [{ isLoading, apiData }] = useFetch()
    // console.log("dcn", apiData, isLoading)
    useEffect(() => {

        const fetchPizzaData = async () => {
            try {
                dispatch(GET_PIZZAS_REQUEST())
                const { data, status } = await axios.get("http://localhost:4000/allpizza")
                dispatch(GET_PIZZAS_SUCCESS(data))


            }
            catch (err) {
                dispatch(GET_PIZZAS_FAIL())
            }
        }
        fetchPizzaData()

    }, [])
    return (

        <div class="row  g-4">
            {loading ? <div class="spinner-border d-flex center" role="status">
                <span class="visually-hidden">Loading...</span>
            </div> : <>
                <div className='col-12 text-center'>
                    <Filters />
                </div>

                {
                    apiData &&



                    apiData.map((data, index) => {

                        return (

                            <div key={data.id} class="col-md-4">
                                <Pizza data={data} />
                            </div>
                        )



                    })
                }




            </>}

        </div>


    )
}


export default Home
