import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import Home from './components/Home';
import About from './components/About';
import AboutLayout from './components/AboutLayout';
import Random from './components/Random';

const App = () => {

	return (<>
		<Header />
		<Routes>
			<Route path='/' element={<Home />} />
			{/* <Route path='/about' element={<About />} />
			<Route path='/about' element={<h2>about new page</h2>} /> */}

			{/* group routes */}
			<Route path='/about' element={<AboutLayout />}>
				<Route index element={<About />} />
				<Route path='new1' element={<h2>about new page 1</h2>} />  	{/* /about/new1 */}
				<Route path='new2' element={<h2>about new page 2</h2>} />	{/* /about/new2 */}
				<Route path='new3' element={<h2>about new page 3</h2>} />	{/* /about/new3 */}
				<Route path=':id' element={<Random />} />	{/* /about/:id */}
			</Route>

			<Route path='*' element={<h2>404 page not found</h2>} />
		</Routes>
	</>);
}

export default App;
