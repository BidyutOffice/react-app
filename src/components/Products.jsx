import React, { useMemo, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const Products = () => {

    const convertTitle = (str) => {
        return str.replace(/\s+/g, '-').toLowerCase()
    }

    const options = useMemo(() => ({ method: 'GET' }), [])
    const { data: products, loading, error } = useFetch('products', options, [])
    const [sortValue, setSortValue] = useState('tolow')

    const sortByPrice = useMemo(() => {
        if (products) {
            if (sortValue === 'tolow') {
                return [...products].sort((a, b) => b?.price - a?.price)
            } else if (sortValue === 'tohigh') {
                return [...products].sort((a, b) => a?.price - b?.price)
            } else {
                return products
            }
        }
    }, [products, sortValue])

    if (loading) return <p>loading...</p>
    if (error) return <p>error: {error}</p>
    return (<>
        <h1 className='text-center text-6xl text-red-500'>Products list</h1>

        <select onChange={(e) => setSortValue(e.target.value)}>
            <option value="tolow">high to low</option>
            <option value="tohigh">low to high</option>
        </select>

        <div className='grid grid-cols-4 gap-5'>
            {sortByPrice ?
                sortByPrice.map(product => (
                    <div key={product.id} className='bg-gray-200 p-5 rounded-md'>
                        <Link to={`/products/${product.id}/${convertTitle(product.title)}`} className='text-2xl'>{product.title}</Link>
                        <p className='text-lg'>${product.price}</p>
                    </div>
                ))
                : <p>no product found</p>}
        </div>
    </>)
}

export default Products