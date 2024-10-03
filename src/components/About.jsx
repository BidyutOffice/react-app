import { useState, useMemo, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const About = () => {
    const options = useMemo(() => ({ method: 'GET' }), [])

    const [offset, setOffset] = useState(0)
    const [products, setProducts] = useState([])

    const { data, loading, error } = useFetch(`products?offset=${offset}&limit=10`, options, [])

    const changeOffset = () => {
        setOffset(offset + 10)
    }

    useEffect(() => {
        setProducts(prevdata => [...prevdata, ...data])
    }, [data])

    return (<>
        <h1>Products Page | About Page</h1>
        {loading && <p>Loading...</p>}
        {products && products.map((product, index) => (
            <div className="p-2 text-red-600" key={index}>{product.id}. {product.title}</div>
        ))}
        <button onClick={changeOffset}>load more</button>
    </>)

};

export default About;
