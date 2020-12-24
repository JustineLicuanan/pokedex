interface Props {
	searchText: {
		get: string;
		set: (text: string) => void;
	};
}

const SearchBar = ({ searchText }: Props) => {
	return (
		<div className='searchBar'>
			<div className='container flex'>
				<input
					type='text'
					className='searchBar__input'
					placeholder='Search a pokemon..'
					value={searchText.get}
					onChange={(e) => searchText.set(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
