import { useState, useEffect } from "react";
const API_BASE_URL = "https://jsonplaceholder.typicode.com"

const useFetch = (path, options = {}, dependencies = []) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL || API_BASE_URL}/${path}`, {
                    ...options,
                    signal, // pass the signal to abort request if needed
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                if (error.name !== "AbortError") { // Ignore abort errors
                    setError(error.message || "An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Clean up on unmount to prevent memory leaks
        return () => {
            controller.abort();
        };
    }, [path, ...dependencies, options]);

    return { data, loading, error };
};

export default useFetch;
