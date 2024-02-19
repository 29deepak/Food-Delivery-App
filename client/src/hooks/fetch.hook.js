import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000"

const useFetch = () => {
    const [getData, setData] = useState({ isLoading: false, apiData: undefined })
    useEffect(() => {

        const fetchPizzaData = async () => {
            try {
                setData((prev) => ({ ...prev, isLoading: true }))
                const { data, status } = await axios.get("/allpizza")
                console.log(status)
                if (status === 200) {
                    setData((prev) => ({ ...prev, isLoading: false }))
                    setData((prev) => ({ ...prev, apiData: data }))

                }

            }



            catch (err) {
                console.log(err)
            }
        }
        fetchPizzaData()

    }, [])
    return (
        [getData, setData]
    )
}
export default useFetch;


