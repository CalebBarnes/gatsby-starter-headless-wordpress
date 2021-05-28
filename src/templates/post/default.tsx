import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"

import Edges from "../../components/edges"

const Post = props => {
  const {
    data: {
      post: { title, content },
    },
  } = props

  return (
    <Edges>
      {title && <h1>{title}</h1>}

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
