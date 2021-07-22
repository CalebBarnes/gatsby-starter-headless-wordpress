import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { Heading, Box, Flex } from "theme-ui"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
      <Heading>post archive</Heading>

      {title && <Heading as="h1">{title}</Heading>}

      <ol style={{ listStyle: `none`, margin: 0, padding: 0 }}>
        {posts &&
          posts.map((post: any) => {
            const { featuredImage } = post

            const image = getImage(featuredImage?.node?.localFile)

            return (
              <li key={post.uri}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <Flex sx={{ alignItems: "center" }}>
                    {image && (
                      <Box mr={4} mt={4} mb={4}>
                        <GatsbyImage
                          image={image}
                          alt={featuredImage?.node?.altText || ""}
                        />
                      </Box>
                    )}

                    <Box>
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
                    </Box>
                  </Flex>
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
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  height: 150
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`
