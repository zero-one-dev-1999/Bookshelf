import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd())

	return {
		plugins: [react()],
		envPrefix: 'VITE_',
		cacheDir: '.vite',
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		server: {
			host: true,
			port: 7777,
			strictPort: true,
			// proxy: {
			// 	'/api': {
			// 		target: env.VITE_API_URL,
			// 		changeOrigin: true,
			// 		rewrite: path => path.replace(/^\/api/, ''),
			// 	},
			// 	// '/api': env.VITE_API_URL,
			// },
		},
		esbuild: {
			keepNames: true,
		},
	}
})
