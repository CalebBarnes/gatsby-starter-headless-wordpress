require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const flags = { FAST_DEV: true, DEV_SSR: true }

const plugins = [
  /**
   * ? This plugin adds a persisting layout between page changes
   * ? See https://www.gatsbyjs.com/plugins/gatsby-plugin-layout/
   */
  `gatsby-plugin-layout`,

  /**
   * ? Plugin for adding Theme UI context
   * ? See https://theme-ui.com/packages/gatsby-plugin/
   */
  `gatsby-plugin-theme-ui`,

  {
    /**
     * ? WordPress source plugin `gatsby-source-wordpress`
     * ? This connects Gatsby to your WordPress site.
     *
     * ? See https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
     */
    resolve: `gatsby-source-wordpress`,
    options: {
      // the only required plugin option for WordPress is the GraphQL url.
      url: process.env.WPGRAPHQL_URL,

      production: {
        hardCacheMediaFiles: true,
      },

      develop: {
        hardCacheMediaFiles: true,
      },

      type: {
        __all: {
          limit: 50,
        },
        MediaItem: {
          lazyNodes: false,
          localFile: {
            requestConcurrency: 50,
          },
        },
      },

      schema: {
        perPage: 50,
        timeout: 60000,
      },
    },
  },

  {
    /**
     * ? We need this plugin so that it adds the "File.publicURL" to our site
     * ? It will allow us to access static url's for assets like PDF's
     *
     * ? See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: `${__dirname}/content/assets`,
    },
  },

  /**
   * ? The following two plugins are required for Gatsby image
   * ? See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
   */
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,

  {
    // ? See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Gatsby Starter WordPress Blog`,
      short_name: `GatsbyJS & WP`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `content/assets/gatsby-icon.png`,
    },
  },

  // ? See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
  `gatsby-plugin-react-helmet`,

  {
    /**
     * ? Adds svg-react-loader to gatsby webpack config
     * ? Import SVGs and use them as Components
     * ? See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/
     */
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /svg/,
      },
    },
  },
]

module.exports = {
  flags,
  plugins,
}
