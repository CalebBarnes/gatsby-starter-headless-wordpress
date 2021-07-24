<p align="center">
  <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  <img alt="WordPress" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Wordpress-Logo.svg/1024px-Wordpress-Logo.svg.png" width="60" />
</p>
<h1 align="center">
  Gatsby headless WordPress starter
</h1>

Kick off your WordPress Gatsby project with this boilerplate. This starter ships with [gatsby-theme-headless-wordpress](https://github.com/CalebBarnes/gatsby-theme-headless-wordpress), a plugin that creates pages for all of your WordPress content.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying this headless wordpress starter.

    ```shell
    # create a new Gatsby site using this headless WordPress starter
    gatsby new my-wordpress-starter https://github.com/CalebBarnes/gatsby-starter-headless-wordpress
    ```

1.  **Set up your Gatsby config**

    Create a .env.development file and add your WPGRAPHQL_URL environment variable.

    ```
    WPGRAPHQL_URL=http://yourwordpressdomain.local/graphql
    ```
    
1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-wordpress-starter/
    gatsby develop
    ```
    
1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/CalebBarnes/gatsby-starter-headless-wordpress)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/CalebBarnes/gatsby-starter-headless-wordpress)
