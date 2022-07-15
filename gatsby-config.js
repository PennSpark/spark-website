module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "spark-tldr",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
