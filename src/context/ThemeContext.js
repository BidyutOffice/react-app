import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => { } });

export const ThemeProvider = ({ children }) => {
    const getInitialTheme = () => {
        if (typeof window !== 'undefined') {
            return window.localStorage.getItem('theme') === 'dark';
        }
        return false;
    };

    const [dark, setDark] = useState(getInitialTheme);

    const toggleTheme = () => setDark(prevTheme => !prevTheme);

    useEffect(() => {
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            window.localStorage.setItem('theme', dark ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', dark);
        }
    }, [dark]);

    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'theme') {
                setDark(e.newValue === 'dark');
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme: dark ? 'dark' : 'light' }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
