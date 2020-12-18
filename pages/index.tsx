import Seo from '../components/Seo';

const Home = () => {
	return (
		<>
			<Seo
				title='Home'
				description='a pokedex that lets you find, and search for pokemons with their stats'
				route='/'
			/>

			<h1>Hello world</h1>
		</>
	);
};

export default Home;
