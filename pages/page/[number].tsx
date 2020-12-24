import { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PagePaths, Pokemon } from '../../types';
import Seo from '../../components/Seo';
import PokemonList from '../../components/PokemonList';
import NavigationBtns from '../../components/NavigationBtns';
import SearchBar from '../../components/SearchBar';

interface Props {
	allPokemons: Pokemon[];
	pokemons: Pokemon[];
	pageNumber: string;
	maxPageCount: number;
}

const Home = ({ allPokemons, pokemons, pageNumber, maxPageCount }: Props) => {
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
				title={`Page ${pageNumber}`}
				description={`this is the page ${pageNumber} of pokedex that lets you find, and search for pokemons with their stats.`}
				route={`/page/${pageNumber}`}
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
				<NavigationBtns pageNumber={pageNumber} maxPageCount={maxPageCount} />
			)}
			<PokemonList pokemons={searchPokemon()} />
			{!searchText.trim() && (
				<NavigationBtns pageNumber={pageNumber} maxPageCount={maxPageCount} />
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

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon');
	const { count } = await res.json();
	const pageCount = Math.ceil(count / 30);
	const paths: PagePaths[] = [];

	for (let i = 1; pageCount > i; i++) {
		paths.push({ params: { number: (i + 1).toString() } });
	}

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const offset = ((parseInt(params?.number as string) - 1) * 30).toString();
	const res = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offset}`
	);
	const { count, results } = await res.json();
	const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}`);
	const { results: allPokemons } = await resp.json();

	return {
		props: {
			allPokemons,
			pokemons: results,
			pageNumber: params?.number,
			maxPageCount: Math.ceil(count / 30),
		},
	};
};

export default Home;
