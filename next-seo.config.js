const NEXT_PUBLIC_SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;
const NEXT_PUBLIC_TWITTER_HANDLE_UNAME =
	process.env.NEXT_PUBLIC_TWITTER_HANDLE_UNAME;
const NEXT_PUBLIC_TWITTER_SITE_UNAME =
	process.env.NEXT_PUBLIC_TWITTER_SITE_UNAME;

export default {
	openGraph: {
		locale: 'en_US',
		site_name: NEXT_PUBLIC_SITE_NAME,
	},
	twitter: NEXT_PUBLIC_TWITTER_SITE_UNAME
		? {
				handle: NEXT_PUBLIC_TWITTER_HANDLE_UNAME,
				site: NEXT_PUBLIC_TWITTER_SITE_UNAME,
				cardType: 'summary_large_image',
		  }
		: undefined,
};
