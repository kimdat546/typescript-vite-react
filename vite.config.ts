/// <reference types="vitest" />
/// <reference types="vite/client" />
// https://vitejs.dev/config/

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	server: {
		port: 3030,
	},
	preview: {
		port: 8080,
	},
	test: {
		globals: true,
		environment: 'jsdom',
	},
});
