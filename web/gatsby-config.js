module.exports = {
  siteMetadata: {
    title: `yateractives`,
    //must be the url your frontend is deployed to!!!
    siteUrl: `https://yateractives.netlify.app`,
    description: `Yater site`,
    author: `Snow`,
  },
  plugins: [
    {
      //keep at plugins[0] for steel config
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `cutpypb3`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: ``,
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: `default`,
      },
    },
    {
      //keep at plugins[1] for steel config
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: `3.0.29`,
        publicApiKey: `MmQyYWY5YjctZTZhNy00OTY5LWE3N2QtMmViYTUzNDVkNTcxNjM3OTk4MzMxNzQxMTk2NDA4
        `,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `yateractives`,
        short_name: `ya`,
        start_url: `/`,
        background_color: `bg`,
        theme_color: `white`,
        display: `standalone`,
        icon: `src/media/photos/logo.webp`,
      },
    },
  ],
};
