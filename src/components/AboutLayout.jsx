import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AboutLayout = () => {
    const id = 50
    return (<>
        <ul>
            <li><Link to={'/about/new1'}>new 1</Link></li>
            <li><Link to={'/about/new2'}>new 2</Link></li>
            <li><Link to={'/about/new3'}>new 3</Link></li>
            <li><Link to={`/about/${id}`}>new 3</Link></li>
        </ul>
        <Outlet />
    </>)
}

export default AboutLayout