import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import { Heading } from "theme-ui"

import Edges from "../../components/edges"

const Page = props => {
  const {
    data: {
      page: { title, content },
    },
  } = props

  // console.log({ props })

  return (
    <Edges>
      {title && <Heading>{title}</Heading>}

      {!!content && <section>{parse(content)}</section>}
    </Edges>
  )
}

export default Page

export const pageQuery = graphql`
  query Page($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      content
    }
  }
`
