import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import SEO from '../next-seo.config';
import '../scss/style.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<DefaultSeo {...SEO} />
			<Header logo='JustPokédex' />
			<Component {...pageProps} />
			<Footer />
		</>
	);
};

export default MyApp;
