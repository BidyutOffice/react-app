import { useState, useEffect } from "react"
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const useFetch = (path, options = {}, depen = []) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${API_BASE_URL}/${path}`, options);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false)
            }
        }

        fetchData();

    }, [path, ...depen])

    return { data, loading, error };

}

export default useFetch