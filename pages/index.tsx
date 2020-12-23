import { GetStaticProps } from 'next';
import { Pokemon } from '../types';
import Seo from '../components/Seo';
import PokemonList from '../components/PokemonList';
import NavigationBtns from '../components/NavigationBtns';

interface Props {
	pokemons: Pokemon[];
	maxPageCount: number;
}

const Home = ({ pokemons, maxPageCount }: Props) => {
	return (
		<>
			<Seo
				title='Home'
				description='a pokedex that lets you find, and search for pokemons with their stats.'
				route='/'
				images={[
					{
						url: '/images/justpokedex-logo.png',
						alt: 'JustPokedex Logo',
					},
				]}
			/>

			<NavigationBtns pageNumber='1' maxPageCount={maxPageCount} />
			<PokemonList pokemons={pokemons} />
			<NavigationBtns pageNumber='1' maxPageCount={maxPageCount} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30');
	const { count, results } = await res.json();

	return {
		props: {
			pokemons: results,
			maxPageCount: Math.ceil(count / 30),
		},
	};
};

export default Home;
