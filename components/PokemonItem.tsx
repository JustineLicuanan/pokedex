import Link from 'next/link';
import Image from 'next/image';
import { Pokemon } from '../types';

interface Props {
	pokemon: Pokemon;
}

const PokemonItem = ({ pokemon }: Props) => {
	const pokemonId = pokemon.url.split('/')[6];
	const pokemonName = pokemon.name.includes('-')
		? pokemon.name.split('-').join(' ')
		: pokemon.name;

	return (
		<li className='pokemonList__item'>
			<Link href={`/pokemon/${pokemon.name}`}>
				<a className='flex'>
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
						alt={pokemon.name}
						width={96}
						height={96}
						key={pokemonId}
					/>
					<h2 className='pokemonList__itemName'>{pokemonName}</h2>
				</a>
			</Link>
		</li>
	);
};

export default PokemonItem;
