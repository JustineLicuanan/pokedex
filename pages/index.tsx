import { useState } from 'react';
import { GetStaticProps } from 'next';
import { Pokemon } from '../types';
import Seo from '../components/Seo';
import PokemonList from '../components/PokemonList';
import NavigationBtns from '../components/NavigationBtns';
import SearchBar from '../components/SearchBar';

interface Props {
	allPokemons: Pokemon[];
	pokemons: Pokemon[];
	maxPageCount: number;
}

const Home = ({ allPokemons, pokemons, maxPageCount }: Props) => {
	const [searchText, setSearchText] = useState('');

	const searchPokemon = () => {
		const modSearchText = searchText.trim().toLowerCase();
		return searchText.trim()
			? allPokemons
					.filter((pokemon) =>
						!pokemon.name.includes('-')
							? pokemon.name.startsWith(modSearchText)
							: pokemon.name.split('-').join(' ').startsWith(modSearchText)
					)
					.slice(0, 30)
			: pokemons;
	};

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

			<SearchBar
				searchText={{
					get: searchText,
					set: setSearchText,
				}}
			/>
			{!searchText.trim() && (
				<NavigationBtns pageNumber='1' maxPageCount={maxPageCount} />
			)}
			<PokemonList pokemons={searchPokemon()} />
			{!searchText.trim() && (
				<NavigationBtns pageNumber='1' maxPageCount={maxPageCount} />
			)}
			<SearchBar
				searchText={{
					get: searchText,
					set: setSearchText,
				}}
			/>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30');
	const { count, results } = await res.json();
	const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}`);
	const { results: allPokemons } = await resp.json();

	return {
		props: {
			allPokemons,
			pokemons: results,
			maxPageCount: Math.ceil(count / 30),
		},
	};
};

export default Home;
