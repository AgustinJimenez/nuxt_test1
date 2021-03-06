const pkg = require('../package')
const resolve = require('path').resolve

const Env = use('Env')

module.exports = {
  mode: 'universal',

  srcDir: resolve(__dirname, '..', 'resources'),

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: 
  [
    '@/plugins/vuetify',
    '~/plugins/language',
    '~/plugins/frontend_routes',
    '~/plugins/axios_extends'
    
  ],

  /*
  ** Nuxt.js modules
  */
  modules: 
  [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/toast'
    
  ],
  /*
  ** Axios module configuration
  */
  axios: 
  {
    // See https://github.com/nuxt-community/axios-module#options
    debug: (Env.get('NODE_ENV') == 'development')
  },

  /*
  ** Toast module configuration
  */
 
  toast: 
  {
    position: 'top-right',
    type: 'info',
    Icon: 'info',
    duration: 10000
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
