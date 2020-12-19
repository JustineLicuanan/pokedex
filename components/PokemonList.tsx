import { Pokemon } from '../types';
import PokemonItem from './PokemonItem';

interface Props {
	pokemons: Pokemon[];
}

const PokemonList = ({ pokemons }: Props) => {
	return (
		<div className='pokemonList'>
			<div className='container'>
				<ul className='flex'>
					{pokemons.map((pokemon, idx) => (
						<PokemonItem key={idx} pokemon={pokemon} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default PokemonList;
