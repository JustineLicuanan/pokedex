interface Props {
	logo: string;
}

const Header = ({ logo }: Props) => {
	return (
		<header className='header'>
			<div className='container flex'>
				<h1 className='header__logo'>{logo}</h1>
			</div>
		</header>
	);
};

export default Header;
