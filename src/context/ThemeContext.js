import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: false, toggleTheme: () => { } });

export const ThemeProvider = ({ children }) => {

    const [dark, setDark] = useState(
        () => window.localStorage.getItem('theme') === 'dark' ? true : false
    );

    const toggleTheme = () => {
        setDark(prevTheme => !prevTheme);
    }

    useEffect(() => {
        window.localStorage.setItem('theme', dark ? 'dark' : 'light')
        document.documentElement.classList.toggle('dark', dark)
    }, [dark])

    return (<ThemeContext.Provider value={{ toggleTheme, dark }}>
        {children}
    </ThemeContext.Provider>)
}

export default ThemeContext