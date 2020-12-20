import { GetStaticPaths, GetStaticProps } from 'next';
import { PagePaths, Pokemon } from '../../types';
import Seo from '../../components/Seo';
import PokemonList from '../../components/PokemonList';
import NavigationBtns from '../../components/NavigationBtns';

interface Props {
	pokemons: Pokemon[];
	pageNumber: string;
	maxPageCount: number;
}

const Home = ({ pokemons, pageNumber, maxPageCount }: Props) => {
	return (
		<>
			<Seo
				title='Home'
				description='a pokedex that lets you find, and search for pokemons with their stats'
				route={`/page/${pageNumber}`}
			/>

			<NavigationBtns pageNumber={pageNumber} maxPageCount={maxPageCount} />
			<PokemonList pokemons={pokemons} />
			<NavigationBtns pageNumber={pageNumber} maxPageCount={maxPageCount} />
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon');
	const { count } = await res.json();
	const pageCount = Math.ceil(count / 30);
	const paths: PagePaths[] = [];

	for (let i = 0; pageCount > i; i++) {
		paths.push({ params: { number: (i + 1).toString() } });
	}

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const pageNumber = ((parseInt(params?.number as string) - 1) * 30).toString();
	const res = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${pageNumber}`
	);
	const { count, results } = await res.json();
	const maxPageCount = Math.ceil(count / 30);

	return {
		props: {
			pokemons: results,
			pageNumber: params?.number,
			maxPageCount,
		},
	};
};

export default Home;
