module.exports = {
  siteMetadata: {
    title: `Scott Diemer`,
    description: `Portfolio website for Scott Diemer.`,
    author: `Scott Diemer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:200,400,700`],
        display: "swap",
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `scottdiemer-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        display: `standalone`,
        icon: `${__dirname}/src/images/portfolio-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
