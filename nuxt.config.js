import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

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
    '/maps': 'https://maps.googleapis.com',
    '/local': 'https://search.google.com'
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
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/css/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
