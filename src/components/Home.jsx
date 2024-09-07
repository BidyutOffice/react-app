import React, { useEffect, useState } from "react";
import About from "./About";

const Home = ({ info }) => {

    const [a, setA] = useState(false)
    console.log('object');

    useEffect(() => {
        for (let i = 0; i < 5000; i++) {
            console.log(i);
        }
        return
    }, [])

    return (
        <>
            {/* <About info={info} /> */}
            <button onClick={() => setA(!a)}>Toggle</button>
            <br />
            <br />
            {a ? "TRUE" : "FALSE"}
        </>
    );
};

export default Home;
