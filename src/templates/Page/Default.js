import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"

const Page = props => {
  const {
    data: {
      page: { title, content },
    },
  } = props

  console.log({ props })

  return (
    <div>
      {title && <h1>{title}</h1>}

      {!!content && <section>{parse(content)}</section>}
    </div>
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
