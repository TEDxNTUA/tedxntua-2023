/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/tedxntua-2023",
  siteMetadata: {
    title: `TEDxNTUA 2023`,
    description: `TEDxNTUA 2023 is held this year, on Saturday, May 13th, at Athens Conservatoire. The theme of the event is MNEME. Join us in this journey, full of intriguing scientific talks, engaging performances and multifaceted workshops.`,
    image: `/seo_image.png`,
    siteUrl: `https://www.2023tedxntua.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `u7sxm6fbdxv7`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "WDneuapWKR9HwpqeGmclxea2b7ZyFIDm-dA4Uy0gmMk",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
