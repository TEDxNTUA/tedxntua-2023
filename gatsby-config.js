/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `TEDxNTUA 2023`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `u7sxm6fbdxv7`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'WDneuapWKR9HwpqeGmclxea2b7ZyFIDm-dA4Uy0gmMk',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
