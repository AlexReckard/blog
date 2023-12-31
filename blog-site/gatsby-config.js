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
    title: `For The Reckard`,
    description: `Welcome to Alex Reckard's Blog called For The Reckard, where he writes on topics such as, but not limited to: technology, traveling, food, art, and shopping`,
    author: `Alex Reckard`,
    siteUrl: `https://blog.alexreckard.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Keep your existing filesystem source for articles
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Modify this section to include gatsby-remark-images
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
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
