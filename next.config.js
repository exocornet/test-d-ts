/** @type {import('next').NextConfig} */

module.exports = {
	// basePath: process.env.NEXT_PUBLIC_BASE_PATH,
	swcMinify: true,
	reactStrictMode: false,
	sassOptions: {
		logger: {
			sourceMap: true,
			warn: function (message) {
				process.stderr.write(`\n${message}\n\n`);
			},
			debug: function (message) {
				process.stderr.write(`\n${message}\n\n`);
			},
		},
	},
	images: {
		// domains: [process.env.NEXT_PUBLIC_IMAGES]
	},
	experimental: {
		turbo: {
			rules: {
				// Option format
				'*.md': [
					{
						loader: '@mdx-js/loader',
						options: {
							format: 'md',
						},
					},
				],
				// Option-less format
				'*.mdx': ['@mdx-js/loader'],
			},
		},
	},
	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
				use: ['@svgr/webpack'],
			}
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
};
