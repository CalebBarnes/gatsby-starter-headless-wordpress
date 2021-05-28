import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Text, Box } from "theme-ui"

import Edges from "./edges"
import FooterMenu from "./menus/FooterMenu"

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
      mt={80}
      p="80px 0"
      as="footer"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <FooterMenu />

      <Link to="/">
        <Text>{generalSettings?.title}</Text>
      </Link>

      <Text>&copy; {new Date().getFullYear()} Caleb Barnes</Text>
    </Edges>
  )
}

export default Footer
