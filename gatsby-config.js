module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "our-clothing-co-gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "our-clothing-co.myshopify.com",
        accessToken: "698b114653a65c4229a0a481ef90b24c",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
