import { createContext } from "react";

const CountContext = createContext({ count: undefined, setCount: function () { } })

export default CountContext