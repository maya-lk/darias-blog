/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Darias Blog"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    { resolve: `gatsby-transformer-remark`},
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "mayaprojects.net/darias/blog/wp",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        acfOptionPageIds: ['options'],
      }
    }
  ]
}
