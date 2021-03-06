export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - zro',
    title: 'zro',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: `https://maps.googleapis.com/maps/api/js?key=${process.env.apiKey}&libraries=places`
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vee-validate',
    '~/plugins/persistedState.client'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  router: {
    prefetchLinks: true
  },

  // Dev Proxy: https://github.com/nuxt-community/proxy-module
  proxy: {
    // Simple proxy
    '/api': 'https://reqres.in',
    '/maps': { target: 'https://maps.googleapis.com', changeOrigin: true },
    '/local': { target: 'https://search.google.com', changeOrigin: true }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/toast'
  ],

  toast: {
    iconPack: 'mdi',
    duration: 8000,
    position: 'top-center',
    register: [ // Register custom toasts
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
