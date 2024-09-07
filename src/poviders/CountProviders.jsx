import React, { useState } from 'react'
import CountContext from '../context/CountContext'

export const CountProviders = ({ children }) => {

    const [count, setCount] = useState(20)

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    )
}
