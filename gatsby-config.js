require('dotenv').config({ path: '.env' })
const dirname = __dirname
module.exports = {
  siteMetadata: {
    title: 'Wilklab',
    description: 'Agencia de servicios digitales',
    author: '@heysoygabo',
    siteUrl: 'https://wilklab.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: dirname + '/src',
      },
    },
    {
      resolve: 'gatsby-plugin-statickit',
      options: {
        siteId: '017795bbf01a',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Wilklab Agency',
        short_name: 'Wilklab',
        start_url: '/',
        background_color: '#0F0A0A',
        theme_color: '#8DECFC',
        display: 'standalone',
        icon: 'src/images/w-3.png',
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL,
        queryLimit: 1000,
        contentTypes: [
          'cliente',
          'miembro',
          'articulo',
          'objetivo',
          'combo',
          'funciones',
          'tag',
          'social',
          'proyecto',
          'categoria',
        ],
        singleTypes: ['nosotros', 'servicios'],
      },
    },
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: process.env.DISQUS_NAME,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#8decfc',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-154136084-3',
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'wilklab.com',
      },
    },
    {
      resolve: 'gatsby-plugin-google-adsense',
      options: {
        publisherId: 'AW-619175367',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
  ],
}
