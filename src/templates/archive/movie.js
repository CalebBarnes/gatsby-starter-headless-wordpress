import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

const MoviesArchive = props => {
  const {
    data: {
      page: { title },
      movies: { nodes: movies },
    },
    pageContext: { nextPagePath, previousPagePath, postsPerPage },
  } = props

  // console.log({ props })

  return (
    <div>
      {title && <h1>{title}</h1>}

      <ol style={{ listStyle: `none` }}>
        {movies &&
          movies.map(movie => {
            const title = movie.title

            return (
              <li key={movie.uri}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={movie.uri} itemProp="url">
                        <span itemProp="headline">{parse(title)}</span>
                      </Link>
                    </h2>
                    <small>{movie.date}</small>
                  </header>
                </article>
              </li>
            )
          })}
      </ol>

      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}

      {nextPagePath && movies.length === postsPerPage && (
        <Link to={nextPagePath}>Next page</Link>
      )}
    </div>
  )
}

export default MoviesArchive

export const pageQuery = graphql`
  query WordPressMoviesArchive(
    $id: String!
    $offset: Int!
    $postsPerPage: Int!
  ) {
    page: wpPage(id: { eq: $id }) {
      title
      content
    }

    movies: allWpMovie(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        uri
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
