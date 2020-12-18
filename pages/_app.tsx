import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import SEO from '../next-seo.config';
import '../scss/style.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
