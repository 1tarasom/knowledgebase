require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: "/knowledgebase",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Knowledge Base",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `types/graphql-types.d.ts`,
        schema: "http://localhost:8000/___graphql",
        documentPaths: [
            './src/**/*.{ts,tsx}',
            './node_modules/gatsby-*/**/*.js'
          ],
        codegenPlugins: [{
          // built-in plugin.
          // Use `typescript` for `@graphql-codegen/typescript`
          // and `operations` for `@graphql-codegen/typescript-operations`
          resolve: 'typescript',
        }],
      },
    },
  ],
};
