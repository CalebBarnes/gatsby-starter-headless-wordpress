import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"

const Post = props => {
  const {
    data: {
      post: { title, content },
    },
  } = props

  // console.log({ props })

  return (
    <div>
      {title && <h1>{title}</h1>}

      {!!content && <section>{parse(content)}</section>}
    </div>
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
