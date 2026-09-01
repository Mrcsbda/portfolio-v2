import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
      '@hero': fileURLToPath(new URL('./src/modules/hero', import.meta.url)),
      '@journey': fileURLToPath(new URL('./src/modules/journey', import.meta.url)),
      '@stack': fileURLToPath(new URL('./src/modules/stack', import.meta.url)),
      '@projects': fileURLToPath(new URL('./src/modules/projects', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@translation': fileURLToPath(new URL('./src/translation', import.meta.url)),
    },
  },
})
