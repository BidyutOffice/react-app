import { useContext } from 'react';
import './App.css';
import { GoSun } from "react-icons/go";
import { BsMoonStars } from "react-icons/bs";
import ThemeContext from './context/ThemeContext';
import Logo from "./assets/logo.png"

const App = () => {

	const { toggleTheme, dark } = useContext(ThemeContext);

	return (<>
		<header className='bg-slate-200 px-12 py-4 dark:bg-slate-800'>
			<nav className='flex justify-between items-center'>
				<a href={'/'} className='text-2xl text-blue-600 font-bold'>
					<img src={Logo} alt="" />QuickStart</a>
				<ul className='flex gap-5'>
					<li><a className='text-slate-800 dark:text-slate-200 font-semibold' href={'/'}>Home</a></li>
					<li><a className='text-slate-800 dark:text-slate-200 font-semibold' href={'/'}>About</a></li>
					<li><a className='text-slate-800 dark:text-slate-200 font-semibold' href={'/'}>Conatct</a></li>
				</ul>
				<a onClick={toggleTheme} className='text-red-500 text-lg' href="#">
					{dark ? <GoSun /> : <BsMoonStars />}
				</a>
			</nav>
		</header>
	</>);
}

export default App;
