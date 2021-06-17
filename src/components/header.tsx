import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { useThemeUI, Heading, Flex, IconButton, MenuButton } from "theme-ui"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

import Edges from "./edges"
import DesktopMenu from "./menus/DesktopMenu"

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

      <Flex sx={{ alignItems: "center" }}>
        <DesktopMenu />
        <IconButton onClick={toggleColorMode} sx={{ cursor: "pointer", color: "primary" }}>
          {colorMode === "light" ? <MoonIcon color="inherit"/> : <SunIcon color="inherit"/>}
        </IconButton>


        <MenuButton sx={{ cursor: "pointer" }}  />
      </Flex>
    </Edges>
  )
}

export default Header
