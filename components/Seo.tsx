import { NextSeo } from 'next-seo';
import { OpenGraph } from 'next-seo/lib/types';

interface Props {
	title: string;
	description: string;
	route: string;
	images?: OpenGraph['images'];
}

const Seo = ({ title, description, route, images }: Props) => {
	const NEXT_PUBLIC_HOST = process.env.NEXT_PUBLIC_HOST;
	const NEXT_PUBLIC_SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

	return (
		<>
			<NextSeo
				title={title}
				titleTemplate={`%s | ${NEXT_PUBLIC_SITE_NAME}`}
				description={description}
				canonical={`${NEXT_PUBLIC_HOST}${route}`}
				openGraph={{
					url: `${NEXT_PUBLIC_HOST}${route}`,
					title: `${title} | ${NEXT_PUBLIC_SITE_NAME}`,
					description,
					images,
				}}
			/>
		</>
	);
};

export default Seo;
