import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [
        react(),
        viteTsconfigPaths(),
        svgrPlugin(),
        {
            // do not fail on serve (i.e. local development)
            ...eslint({
                failOnWarning: false,
                emitError: true,
                emitWarning: true,
                failOnError: false,
            }),
            apply: 'serve',
            enforce: 'post',
        },
    ],
    build: {
        outDir: 'build',
    },
})