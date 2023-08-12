import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://new.opendaoc.com',
	integrations: [
		starlight({
			title: 'OpenDAoC',
			lastUpdated: true,
			pagination: false,
			logo: {
				src: './src/assets/Logo.svg',
			},
			favicon: './src/assets/favicon.ico',
			social: {
				github: 'https://github.com/OpenDAoC',
				discord: 'https://discord.gg/RHqzyt8KyC',
			},
			sidebar: [
				{ label: 'Home', link: '/' },
				{ label: 'Documentation Home', link: '/docs' },
				{
					label: 'About',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is OpenDAoC', link: '/docs/what-is-opendaoc/' },
						{ label: 'Motivation', link: '/docs/motivation/'},
					],
				},
				{
					label: 'Core',
					items: [
						{ label: 'Getting Started', link: '/docs/core/getting-started/' },
						{ label: 'Docker Setup', link: '/docs/core/docker-setup/' },
						{ label: 'Manual Setup', link: '/docs/core/manual-setup/' },
						{ label: 'APIs', link: '/docs/core/api/' },
					],
				},
				{ label: 'Database', link: '/docs/database' },
				{ label: 'Client', link: '/docs/client' },
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
					label: 'Additional Features',
					collapsed: true,
					items: [
						{ label: 'Index', link: '/docs/additional-features/' },
						{ label: 'Bounty System', link: '/docs/additional-features/bounty-system/' },
						{ label: 'Conquest System', link: '/docs/additional-features/conquest-system/' },
						{ label: 'Predator System', link: '/docs/additional-features/predator-system/' },
						{ label: 'Realm Loyalty', link: '/docs/additional-features/realm-loyalty/' },
						{ label: 'Recurring Quests', link: '/docs/additional-features/recurring-quests/' },
						{ label: 'XP Items', link: '/docs/additional-features/xp-items/' },


					],
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/docs/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
