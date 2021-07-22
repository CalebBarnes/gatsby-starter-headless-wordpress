require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const flags = { FAST_DEV: false, DEV_SSR: false }

const plugins = [
  /**
   * ? Creates all WP pages in this project
   * ? See https://github.com/CalebBarnes/gatsby-theme-headless-wordpress
   */
  `gatsby-theme-headless-wordpress`,

  /**
   * ? This plugin adds a persisting layout between page changes ~ ./src/layouts
   * ? See https://www.gatsbyjs.com/plugins/gatsby-plugin-layout/
   */
  `gatsby-plugin-layout`,

  /**
   * ? Plugin for adding Theme UI context ~ ./src/gatsby-plugin-theme-ui
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
        hardCacheMediaFiles: true, // stores the wp media files in a .wordpress-cache folder
      },

      develop: {
        hardCacheMediaFiles: true, // stores the wp media files in a .wordpress-cache folder
      },

      type: {
        __all: {
          limit: process.env.NODE_ENV === "development" ? 50 : null, // limit all posts to 50 in development
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
   * ? The following three plugins are required for Gatsby image
   * ? See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
   */
  `gatsby-plugin-image`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`, // ? Needed for dynamic images

  {
    // ? See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest
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

  /**
   * ? Provides drop-in support for server rendering data added with React Helmet.
   * ? React Helmet is a component which lets you control your document head using their React component.
   * ? See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet
   */
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

if (process.env.WEBPACK_BUNDLE_ANALYSER) {
  /**
   * ? Gatsby plugin with the latest version of webpack-bundle-analyser to
   * ? visualize size of output files with an interactive zoomable treemap.
   *
   * ? See https://www.gatsbyjs.com/plugins/gatsby-plugin-webpack-bundle-analyser-v2/
   */

  plugins.push(`gatsby-plugin-webpack-bundle-analyser-v2`)
}

module.exports = {
  flags,
  plugins,
}
