import React from 'react'
import useFetch from '../../hooks/fetch.hook'
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const PizzaList = () => {
    const navigate = useNavigate()
    const [{ isLoading, apiData }] = useFetch()
    console.log("dcn", apiData, isLoading)
    const handleDelete = (id) => {
        axios.post("/deletepizza", { pizzaId: id }).then(() => {
            navigate("/admin/pizzalist")
            console.log("successfull deleted")
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            {isLoading && <div class="spinner-border d-flex center" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>}

            <>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">s/n</th>
                            <th scope="col">Pizza Image</th>
                            <th scope="col">Pizza Name</th>
                            <th scope="col">Prices</th>
                            <th scope="col">Category</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apiData && apiData.map((pizza, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td><img src={pizza.images} style={{ width: "60px", height: "60px" }} /></td>
                                        <td>{pizza.name}</td>
                                        <td>small:{pizza.prices[0]["small"]}
                                            <br />
                                            medium:{pizza.prices[0]["medium"]}
                                            <br />
                                            large:{pizza.prices[0]["large"]}
                                        </td>
                                        <td>{pizza.category}</td>
                                        <td>
                                            <Link to={`/admin/editpizza/${pizza.id}`}><AiFillEdit style={{ cursor: "pointer" }} /></Link> &nbsp; <MdDelete style={{ cursor: "pointer" }} onClick={() => handleDelete(pizza.id)} /></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </>


        </>
    )
}

export default PizzaList