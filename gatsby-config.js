module.exports = {
  siteMetadata: {
    siteUrl: "https://demo.raae.codes",
    title: "@raae demo starter",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    "gatsby-plugin-gatsby-cloud",
  ],
};
