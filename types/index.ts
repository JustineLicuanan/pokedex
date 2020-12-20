export interface PagePaths {
	params: { number: string };
}

export interface Pokemon {
	name: string;
	url: string;
}

export interface PokemonStat {
	base_stat: number;
	stat: { name: string };
}

export interface PokemonType {
	type: { name: string };
}

export interface PokemonData {
	id: number;
	name: string;
	sprites: { front_default: string };
	stats: PokemonStat[];
	types: PokemonType[];
}
