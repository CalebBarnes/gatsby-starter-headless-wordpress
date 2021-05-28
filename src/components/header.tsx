import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { useThemeUI, Heading, Flex, Button } from "theme-ui"

import Edges from "./edges"

const Header = () => {
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

  const { colorMode, setColorMode } = useThemeUI()

  const toggleColorMode = () => {
    if (!setColorMode || !colorMode) {
      return
    }

    if (colorMode === "__default") {
      setColorMode("light")
    } else {
      setColorMode("__default")
    }
  }

  return (
    <Edges
      p="20px 0"
      as="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <Heading>{generalSettings?.title}</Heading>
      </Link>
      <Flex>
        <Button onClick={toggleColorMode} sx={{ cursor: "pointer" }}>
          {colorMode === "__default" ? "Light" : "Dark"}
        </Button>

        {/* <MenuButton sx={{ cursor: "pointer" }} /> */}
      </Flex>
    </Edges>
  )
}

export default Header
