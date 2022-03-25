module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-shopify',
    options: {
      "shopName": "uran-gatsby-shopify-project",
      "accessToken": ""
    }
  }, "gatsby-plugin-styled-components"]
};