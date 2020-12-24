import { Pokemon } from '../types';
import PokemonItem from './PokemonItem';
import NotFound from './NotFound';

interface Props {
	pokemons: Pokemon[];
}

const PokemonList = ({ pokemons }: Props) => {
	return (
		<div className='pokemonList'>
			<div className='container'>
				{pokemons.length ? (
					<ul className='flex'>
						{pokemons.map((pokemon, idx) => (
							<PokemonItem key={idx} pokemon={pokemon} />
						))}
					</ul>
				) : (
					<NotFound />
				)}
			</div>
		</div>
	);
};

export default PokemonList;
