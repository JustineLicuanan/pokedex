import Image from 'next/image';
import { PokemonData } from '../types';
import StatList from './StatList';

interface Props {
	pokemon: PokemonData;
}

const PokemonInfo = ({ pokemon }: Props) => {
	const pokemonName = pokemon.name.includes('-')
		? pokemon.name.split('-').join(' ')
		: pokemon.name;

	return (
		<div className='pokemonInfo'>
			<div className='container flex'>
				<div className='pokemonInfo__profile flex'>
					<Image
						src={pokemon.sprites.front_default}
						alt={pokemon.name}
						width={96}
						height={96}
						key={pokemon.id}
					/>
					<h2 className='pokemonInfo__name'>{`#${pokemon.id} | ${pokemonName}`}</h2>
					<h3 className='pokemonInfo__types'>
						{pokemon.types.map(({ type }) => type.name).join(', ')}
					</h3>
				</div>
				<StatList stats={pokemon.stats} />
			</div>
		</div>
	);
};

export default PokemonInfo;
