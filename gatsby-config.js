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
        spaceId: `6iuuciih0s8k`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'Z5iVOU7l6smW4yB-898gqIYqBP8eHKqGWkX8jeNHexw',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
