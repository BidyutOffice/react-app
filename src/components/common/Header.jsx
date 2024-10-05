import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import Logo from "../../assets/logo.png"
import { GoSun } from 'react-icons/go'
import { BsMoonStars } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = () => {

    const { toggleTheme, theme } = useContext(ThemeContext)

    return (<header className='bg-slate-200 px-12 py-4 dark:bg-slate-800'>
        <nav className='flex justify-between items-center'>
            <Link to={'/'} className='text-2xl text-blue-600 font-bold flex'>
                <img className='w-8' src={Logo} alt="" />QuickStart</Link>
            <ul className='flex gap-5'>
                <li>
                    <Link className='text-slate-800 dark:text-slate-200 font-semibold' to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/products'} className='text-slate-800 dark:text-slate-200 font-semibold' >products</Link>
                </li>
                <li>
                    <Link className='text-slate-800 dark:text-slate-200 font-semibold' to={'/about'}>About</Link>
                </li>
            </ul>
            <div onClick={toggleTheme} className='text-red-500 text-lg' >
                {theme === 'dark' ? <GoSun /> : <BsMoonStars />}
            </div>
        </nav>
    </header>)
}

export default Header