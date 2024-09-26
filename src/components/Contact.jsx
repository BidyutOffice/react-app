import React from 'react'
import useFetch from '../hooks/useFetch'

const Contact = () => {

    const { data: users, loading, error } = useFetch('users')

    console.log(users);

    return (<>
        <div>Contact</div>
    </>)
}

export default Contact