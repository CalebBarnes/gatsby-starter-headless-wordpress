import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Text } from "theme-ui"

import Edges from "./edges"

const Footer = (_props: any) => {
  const {
    wp: { generalSettings },
  } = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          title
        }
      }
    }
  `)

  return (
    <Edges
      p="20px 0"
      as="footer"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <Text>{generalSettings?.title}</Text>
      </Link>

      <Text>&copy; {new Date().getFullYear()} Caleb Barnes</Text>
    </Edges>
  )
}

export default Footer
