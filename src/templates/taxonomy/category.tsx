import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import { Heading, Box } from "theme-ui"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Edges from "../../components/edges"

const Category = (props: any) => {
//   const {
//     data: {
//       Category: { title, content, featuredImage },
//     },
//   } = props

//   const image = getImage(featuredImage?.node?.localFile)

  return (
    <Edges>
        <Heading as="h1">Category</Heading>
      {/* {image && (
        <Box mb={2}>
          <GatsbyImage image={image} alt={featuredImage?.node?.altText || ""} />
        </Box>
      )} */}

      {/* {title && <Heading as="h1">{title}</Heading>} */}

      {/* {!!content && <section>{parse(content)}</section>} */}
    </Edges>
  )
}

export default Category

// export const postQuery = graphql`
//   query Post($id: String!) {
//     post: wpPost(id: { eq: $id }) {
//       title
//       content
//       featuredImage {
//         node {
//           altText
//           localFile {
//             childImageSharp {
//               gatsbyImageData(
//                 height: 300
//                 placeholder: BLURRED
//                 formats: [AUTO, WEBP, AVIF]
//               )
//             }
//           }
//         }
//       }
//     }
//   }
// `
