import { PokemonStat } from '../types';

const StatItem = ({ base_stat, stat }: PokemonStat) => {
	const statName = stat.name.includes('-')
		? stat.name.split('-').join(' ')
		: stat.name;

	return (
		<li className='pokemonInfo__statsItem flex'>
			<p className='pokemonInfo__statsItemName'>{`${statName}: `}</p>
			<p className='pokemonInfo__statsItemValue'>{base_stat}</p>
		</li>
	);
};

export default StatItem;
