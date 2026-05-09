export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  css: [
    'bulma/css/bulma.min.css'
  ],

  modules: [
    '@vite-pwa/nuxt'
  ],

  pwa: {
    registerType: 'autoUpdate',

    devOptions: {
      enabled: true
    },

    manifest: {
      name: 'Gratka PWA',
      short_name: 'Gratka',
      description: 'Aplikacja nieruchomości',
      theme_color: '#001f78',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      scope: '/',

      icons: [
        {
          src: '/icons/pwa-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icons/pwa-512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  }
})