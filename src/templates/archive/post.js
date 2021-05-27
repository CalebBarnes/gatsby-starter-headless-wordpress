import React from "react"
import { graphql } from "gatsby"
// import parse from "html-react-parser"

const PostArchive = props => {
  const {
    data: {
      page: { title },
    },
  } = props

  console.log({ props })

  return (
    <div>
      {title && <h1>{title}</h1>}

      <h1>POSTS HERE</h1>
    </div>
  )
}

export default PostArchive

export const pageQuery = graphql`
  query PostArchive($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      #   content
    }
  }
`
