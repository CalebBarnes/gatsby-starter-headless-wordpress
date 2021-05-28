import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"

import Edges from "../../components/edges"
import { Heading } from "theme-ui"

const Post = (props: any) => {
  const {
    data: {
      post: { title, content },
    },
  } = props

  return (
    <Edges>
      {title && <Heading as="h1">{title}</Heading>}

      {!!content && <section>{parse(content)}</section>}
    </Edges>
  )
}

export default Post

export const postQuery = graphql`
  query Post($id: String!) {
    post: wpPost(id: { eq: $id }) {
      title
      content
    }
  }
`
