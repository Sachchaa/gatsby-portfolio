module.exports = {
  siteMetadata: {
    title: `Sachin Kanishka`,
    description: `This is Sachin portfolio.`,
    author: `@developedbysachin`,
    siteUrl: `https://sachinkanishka.dev`,
    image: `src/images/hero-img.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hero-img.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`],
        //If using single types place them in this array.
        singleTypes: [`about`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        //loginData: {
        // identifier: "",
        //  password: "",
        //},
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Roboto\:400,700',
          'Ubuntu\:400,600,700',
          'Open Sans\:400,600,700'
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
