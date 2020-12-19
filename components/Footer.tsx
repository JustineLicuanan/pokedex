const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container flex'>
				<p>
					&lt;/&gt; with ❤️ by{' '}
					<a
						href='//github.com/JustineLicuanan'
						target='_blank'
						rel='noopener noreferrer'
						className='footer__authorLink'
					>
						Justine Licuanan
					</a>{' '}
					&copy; {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
