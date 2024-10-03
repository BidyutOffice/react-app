import React, { useMemo } from 'react'
import useFetch from '../hooks/useFetch'

const Contact = () => {

    const options = useMemo(() => ({ method: 'GET' }), [])

    const { data: users, loading, error } = useFetch('users', options, [])

    console.log(users);

    return (<>
        <div>Contact</div>
    </>)
}

export default Contact