import { useContext } from "react";
import CountContext from "../context/CountContext";

const About = () => {


    const { count, setCount } = useContext(CountContext)

    return (
        <>
            <h1>About</h1>
            {count}
            <br />
            <button onClick={() => { setCount(40) }}>click</button>
        </>
    );
};

export default About;
