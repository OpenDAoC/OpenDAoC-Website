import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://new.opendaoc.com',
	integrations: [
		starlight({
			title: 'OpenDAoC',
			lastUpdated: true,
			logo: {
				src: './src/assets/Logo.png',
			},
			favicon: './src/assets/favicon.ico',
			social: {
				github: 'https://github.com/OpenDAoC',
				discord: 'https://discord.gg/RHqzyt8KyC',
			},
			sidebar: [
				{
					label: 'Docs',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is OpenDAoC', link: '/guides/what-is-opendaoc/' },
						{ label: 'Motivation', link: '/guides/motivation/'},
						{ label: 'Getting Started', link: '/guides/core/getting-started/' },
						{ label: 'Manual Setup', link: '/guides/core/manual-setup/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
