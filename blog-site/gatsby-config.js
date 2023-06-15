/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Blog Site`,
    description: `A description of your blog`,
    author: `Alex Reckard`,
    siteUrl: `https://blog.alexreckard.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `For The Reckard`,
        short_name: `Alex Reckard Blog`,
        start_url: `/`,
        background_color: `#aabbcc`,
        theme_color: `#aabbcc`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}

