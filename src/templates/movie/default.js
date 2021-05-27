import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"

const Movie = props => {
  const {
    data: {
      movie: { title, content },
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

export default Movie

export const pageQuery = graphql`
  query Movie($id: String!) {
    movie: wpMovie(id: { eq: $id }) {
      title
      content
    }
  }
`
