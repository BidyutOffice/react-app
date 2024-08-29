import React from 'react'

const Home = ({ info: a, cities }) => {

    const title = 'Home Component'
    const istrue = false



    // const design1 = {
    //     backgroundColor: 'lightblue',
    //     fontSize: '60px'
    // }

    // const design2 = {
    //     backgroundColor: 'red',
    //     fontSize: '60px'
    // }

    // if (istrue) {
    //     return <p>Hello, World!</p>
    // }

    return (<>
        {/* {istrue ? <p>Hello, World!</p> : <h1>{a} {title}</h1>} */}
        {/* {istrue && <p>Hello, World!</p>} */}
        <ul>
            {cities.map((city) => <li key={city}>{city}</li>)}
        </ul>
    </>)
}

export default Home

Home.defaultProps = {
    info: 'Hello '
}