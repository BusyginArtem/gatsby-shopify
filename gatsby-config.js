require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-source-shopify',
      options: {
        password: process.env.GATSBY_SHOPIFY_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
  ]
};