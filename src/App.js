import { useContext } from 'react';
import './App.css';
import { GoSun } from "react-icons/go";
import { BsMoonStars } from "react-icons/bs";
import ThemeContext from './context/ThemeContext';
import Logo from "./assets/logo.png"
import About from './components/About';
import Contact from './components/Contact';

const App = () => {

	const { toggleTheme, theme } = useContext(ThemeContext);

	return (<>
		<header className='bg-slate-200 px-12 py-4 dark:bg-slate-800'>
			<nav className='flex justify-between items-center'>
				<a href={'/'} className='text-2xl text-blue-600 font-bold flex'>
					<img className='w-8' src={Logo} alt="" />QuickStart</a>
				<ul className='flex gap-5'>
					<li><a className='text-slate-800 dark:text-slate-200 font-semibold' href={'/'}>Home</a></li>
					<li><a className='text-slate-800 dark:text-slate-200 font-semibold' href={'/'}>About</a></li>
					<li><a className='text-slate-800 dark:text-slate-200 font-semibold' href={'/'}>Conatct</a></li>
				</ul>
				<div onClick={toggleTheme} className='text-red-500 text-lg' >
					{theme === 'dark' ? <GoSun /> : <BsMoonStars />}
				</div>
			</nav>
		</header>
		<About />

		<Contact />
	</>);
}

export default App;
