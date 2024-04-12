import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'logo.png', 'logo-transparent.png'],
    manifest: {
      name: 'My Portfolio',
      short_name: 'Portfolio',
      theme_color: '#000000',
      icons: [
        {
          src: '/logo-transparent.png',
          sizes: '500x500',
          type: 'image/png',
        },
        {
          src: '/logo.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  }),svgr({
    include: "public/**/*.svg",
  }),
],
})