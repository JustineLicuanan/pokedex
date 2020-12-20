import { PokemonStat } from '../types';
import StatItem from './StatItem';

interface Props {
	stats: PokemonStat[];
}

const StatList = ({ stats }: Props) => {
	return (
		<div className='pokemonInfo__stats'>
			<h3 className='pokemonInfo__statLabel'>Stats</h3>
			<ul className='pokemonInfo__statList'>
				{stats.map(({ base_stat, stat }, idx) => (
					<StatItem key={idx} base_stat={base_stat} stat={stat} />
				))}
			</ul>
		</div>
	);
};

export default StatList;
