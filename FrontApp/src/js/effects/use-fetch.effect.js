import { useState, useEffect } from "react";

const useFetch = (url, options={}) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url, options);
            const dataArray = await response.json();
            setData(dataArray);
        }
        fetchData();
    }, []);
    return data;
}

export default useFetch;