import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/myapi': {
        target: 'http://frontend-dply.s3-website.us-east-2.amazonaws.com/', // The backend server URL
        changeOrigin: true,           // Change the origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/myapi/, ''), // Rewrite the path to match the target
      },
    },
  },
  base: './',
})
