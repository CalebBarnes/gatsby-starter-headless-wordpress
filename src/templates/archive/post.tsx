import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

const PostArchive = props => {
  const {
    data: {
      page: { title },
      posts: { nodes: posts },
    },
    pageContext: { nextPagePath, previousPagePath },
  } = props

  // console.log({ props })

  return (
    <div>
      {title && <h1>{title}</h1>}

      <ol style={{ listStyle: `none` }}>
        {posts &&
          posts.map(post => {
            const title = post.title

            return (
              <li key={post.uri}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.uri} itemProp="url">
                        <span itemProp="headline">{parse(title)}</span>
                      </Link>
                    </h2>
                    <small>{post.date}</small>
                  </header>
                  <section itemProp="description">
                    {parse(post.excerpt)}
                  </section>
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
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
    </div>
  )
}

export default PostArchive

export const pageQuery = graphql`
  query WordPressPostArchive($id: String!, $offset: Int!, $postsPerPage: Int!) {
    page: wpPage(id: { eq: $id }) {
      title
      content
    }

    posts: allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
      }
    }
  }
`
