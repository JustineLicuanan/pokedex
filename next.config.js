module.exports = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/page/1',
				permanent: true,
			},
		];
	},
	images: {
		domains: ['raw.githubusercontent.com'],
	},
};
