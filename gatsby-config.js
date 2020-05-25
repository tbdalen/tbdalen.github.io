/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "TBD",
    titleTemplate: "Portfolio",
    description: "This is a portfolio made by Tarjei",
    url: "https://www.tbdalen.github.io", // No trailing slash allowed!
    image: "/images/avatar.jpg", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
