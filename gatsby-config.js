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
        spaceId: `e0crt4swqxey`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: '8r36GusgSSx1J1cQKaeDffe6jmHPpWTELRyPKT16eOQ',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
