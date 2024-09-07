import React, { useContext } from 'react'
import CountContext from '../context/CountContext'

const Contact = () => {

    const { count } = useContext(CountContext)

    return (<>
        <div>Contact</div>
        {count}
    </>)
}

export default Contact