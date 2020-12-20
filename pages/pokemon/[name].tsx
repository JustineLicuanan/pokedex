import { GetServerSideProps } from 'next';
import { PokemonData } from '../../types';
import Seo from '../../components/Seo';
import PokemonInfo from '../../components/PokemonInfo';
import GoBackBtn from '../../components/GoBackBtn';

interface Props {
	pokemon: PokemonData;
}

const PokemonPage = ({ pokemon }: Props) => {
	const capitalizeString = (str: string) =>
		str.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

	const pokemonName = pokemon.name.includes('-')
		? capitalizeString(pokemon.name.split('-').join(' '))
		: capitalizeString(pokemon.name);
	const pokemonTypes = pokemon.types.map(({ type }) => type.name).join('/');

	return (
		<>
			<Seo
				title={pokemonName}
				description={`${pokemonName} is a pokemon that is ${pokemonTypes} type, and the number ${pokemon.id} in the pokedex.`}
				route={`/pokemon/${pokemon.name}`}
				images={[
					{
						url: pokemon.sprites.front_default,
						alt: pokemon.name,
					},
				]}
			/>
			<PokemonInfo pokemon={pokemon} />
			<GoBackBtn />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	try {
		const res = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${params?.name}`
		);
		const pokemon = await res.json();

		return { props: { pokemon } };
	} catch (err) {
		return { notFound: true };
	}
};

export default PokemonPage;
