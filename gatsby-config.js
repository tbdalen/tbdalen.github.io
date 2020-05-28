/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Tarjei B. Dalen",
    titleTemplate: "Portfolio",
    description: "This is a portfolio made by Tarjei",
    url: "https://www.tbdalen.github.io", // No trailing slash allowed!
    image: "/src/images/avatar.jpg", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tarjei B. Dalen`,
        short_name: `tbd`,
        start_url: `/`,
        background_color: `#F2F2F2`,
        theme_color: `#1F1F1F`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
