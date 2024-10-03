import React from 'react'
import { useParams } from 'react-router-dom'

const Random = () => {

    const { id } = useParams()

    return (
        <div>Random {id}</div>
    )
}

export default Random