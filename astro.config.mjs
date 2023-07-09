import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import UnoCSS from 'unocss/astro'
import basicSsl from '@vitejs/plugin-basic-ssl'
import image from '@astrojs/image'
const env = loadEnv('', process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [basicSsl()],
		server: {
			https: true
		}
	},
	integrations: [
		storyblok({
			accessToken: 'Jr6JDokGOICQ5DJvv8unxQtt',
			components: {
				page: 'storyblok/Page',
				config: 'storyblok/Config',
				feature: 'storyblok/Feature',
				grid: 'storyblok/Grid',
				teaser: 'storyblok/Teaser',
				hero: 'storyblok/Hero',
				menu: 'storyblok/Menu',
				list: 'storyblok/List',
				volume: 'storyblok/Volume',
				listMenu: 'storyblok/ListMenu',
				info: 'storyblok/Information',
				projectCard: 'storyblok/ProjectCard'
			},
			apiOptions: {
				region: 'us'
			}
		}),
		UnoCSS({
			injectReset: true
		}),
		image({
			serviceEntryPoint: '@astrojs/image/sharp'
		})
	]
})
