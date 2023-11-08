import { useState, useEffect } from "react";
import axios from "axios";
import { Popularjobs } from "../components/home/popular/Popularjobs"
// import { JOB_FINDER_KEY } from '@env'

// const JobFinderKey = JOB_FINDER_KEY

export const useFetch = (endpoint, query) => {
    const [data, SetData] = useState([]);
    const [isLoading, SetIsLoading] = useState(false);
    const [error, SetError] = useState(null);

    // const axios = require('axios');
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '8870edfda2msh8096c0f73a9db54p116005jsna0e65a6ffe5c',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const FetchData = async () => {
        SetIsLoading(true);

        try {
            const response = await axios(options);

            SetData(response.data.data);
            console.log(data);
            SetIsLoading(false)

        } catch (error) {
            if (error.response && error.response.status === 429) {
                await delay(5000); 
                FetchData(); 
            }
            else {

                SetError(error);
                alert(error)
                console.error(error);
            }


        } finally {
            SetIsLoading(false)
        }
        jjjjjjjjjjjjjjjjjjjjjjjj
    useEffect(() => {
        FetchData();
    }, []);

    const refetch = () => {
        SetIsLoading(true)
        FetchData();
    }


    return { data, isLoading, error, refetch };

}
export default useFetch

