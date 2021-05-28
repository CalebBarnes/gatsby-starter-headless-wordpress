import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

import Edges from "../../components/edges"

const PostArchive = (props: any) => {
  const {
    data: {
      page: { title },
      posts: { nodes: posts },
    },
    pageContext: { nextPagePath, previousPagePath },
  } = props

  return (
    <Edges>
      {title && <h1>{title}</h1>}

      <ol style={{ listStyle: `none` }}>
        {posts &&
          posts.map((post: any) => {
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
                        <span itemProp="headline">
                          {post.title && parse(post.title)}
                        </span>
                      </Link>
                    </h2>
                    <small>{post.date}</small>
                  </header>
                  <section itemProp="description">
                    {post.excerpt && parse(post.excerpt)}
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
    </Edges>
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
        id
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
      }
    }
  }
`
