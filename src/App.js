import './App.css';
import Home from './components/Home';

const App = () => {

	const cities = ['Mumbai', 'Pune', "Bengaluru", "Kolkata"]

	return (<>
		<Home cities={cities} info='Welcome!' />
		<Home cities={['blog 1', 'blog 2']} info='Welcome!' />
	</>);
}

export default App;
