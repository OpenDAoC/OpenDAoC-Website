import { defineConfig, squooshImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.opendaoc.com',
	integrations: [
		starlight({
			title: 'OpenDAoC',
			lastUpdated: true,
			pagination: false,
			logo: {
				src: './src/assets/Logo.svg',
			},
			favicon: './favicon.svg',
			social: {
				github: 'https://github.com/OpenDAoC',
				discord: 'https://discord.gg/RHqzyt8KyC',
			},
			sidebar: [
				{ label: 'Home', link: '/' },
				{ label: 'Documentation Home', link: '/docs' },
				{
					label: 'About',
					collapsed: false,
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is OpenDAoC', link: '/docs/what-is-opendaoc/' },
						{ label: 'Motivation', link: '/docs/motivation/'},
					],
				},
				{
					label: 'Core',
					collapsed: false,
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
					label: 'Account Manager',
					collapsed: false,
					items: [
						{ label: 'Getting Started', link: '/docs/account-manager/getting-started/' },
						{ label: 'Discord Application', link: '/docs/account-manager/discord-application/'},
						{ label: 'Docker Setup', link: '/docs/account-manager/docker-setup/' },
						{ label: 'Manual Setup', link: '/docs/account-manager/manual-setup/' },
						{ label: 'Personalization', link: '/docs/account-manager/personalization/' },
					],
				},
				// { 
				// 	label: 'Launcher',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'launcher' },
				// },
				{
					label: 'Additional Features',
					collapsed: false,
					items: [
						{ label: 'Index', link: '/docs/additional-features/' },
						{ label: 'Bounty System', link: '/docs/additional-features/bounty-system/' },
						{ label: 'Conquest System', link: '/docs/additional-features/conquest-system/' },
						{ label: 'Cosmetic Rewards', link: '/docs/additional-features/cosmetic-rewards/' },
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
    image: { service: squooshImageService()},
});
