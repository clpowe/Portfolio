import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import UnoCSS from 'unocss/astro'
import basicSsl from '@vitejs/plugin-basic-ssl'
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
				// Add your components here
			},
			apiOptions: {
				region: 'us'
			}
		}),
		UnoCSS({
			injectReset: true
		})
	]
})
