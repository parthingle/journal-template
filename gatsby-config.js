module.exports = {
    siteMetadata: {
      title: `Journal Template`,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
      `gatsby-transformer-remark`,
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
      {
        resolve: `gatsby-source-firebase`,
        options: {
          credential: require("./lockbox-14828-firebase-adminsdk-irdae-4821770b00.json"),
          databaseURL: "https://lockbox-14828.firebaseio.com"
        }
      }
    ],
  }