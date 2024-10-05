import React, { useMemo } from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

const ViewProduct = () => {
    const options = useMemo(() => ({ method: 'GET' }), [])

    const { productid } = useParams()

    const { data: product, loading, error } = useFetch(`products/${productid}`, options, [productid])

    if (loading) return <p>loading...</p>
    if (error) return <p>error: {error}</p>

    if (!product) {
        return <p>Product not found</p>
    }

    const { title, price, description, images } = product

    return (<>
        <h1 className='text-center text-6xl text-red-500'>product info</h1>

        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>price: ${price}</p>
        <img className='w-40' src={images[0]} alt={title} />
    </>)
}

export default ViewProduct