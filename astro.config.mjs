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
				src: './src/assets/Logo.svg',
			},
			favicon: './src/assets/favicon.ico',
			social: {
				github: 'https://github.com/OpenDAoC',
				discord: 'https://discord.gg/RHqzyt8KyC',
			},
			sidebar: [
				{
					label: 'About',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is OpenDAoC', link: '/guides/what-is-opendaoc/' },
						{ label: 'Motivation', link: '/guides/motivation/'},
					],
				},
				{
					label: 'Core',
					items: [
						{ label: 'Getting Started', link: '/guides/core/getting-started/' },
						{ label: 'Manual Setup', link: '/guides/core/manual-setup/' },
					],
				},
				{
					label: 'Launcher',
					collapsed: true,
					autogenerate: { directory: 'launcher' },
				},
				{
					label: 'Account Manager',
					collapsed: true,
					autogenerate: { directory: 'account-manager' },
				},
				{
					label: 'Reference',
					collapsed: true,
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
