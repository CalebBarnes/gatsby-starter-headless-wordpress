import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import {
  useThemeUI,
  Heading,
  Flex,
  IconButton,
  MenuButton,
  Container,
} from "theme-ui"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import Headroom from "react-headroom"

import Edges from "./edges"
import DesktopMenu from "./menus/DesktopMenu"
import LanguageSwitcher from "./polylang/LanguageSwitcher"

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
    <Headroom>
      <Container
        sx={{
          boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.5)",
          bg: "background",
          py: 1,
        }}
      >
        <Edges>
          <Flex
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link to="/">
              <Heading>{generalSettings?.title}</Heading>
            </Link>

            <Flex sx={{ alignItems: "center" }}>
              <DesktopMenu />

              <IconButton
                onClick={toggleColorMode}
                ml={2}
                sx={{
                  cursor: "pointer",
                  color: "primary",
                  width: "32px",
                  height: "32px",
                }}
              >
                {colorMode === "light" ? (
                  <MoonIcon color="inherit" />
                ) : (
                  <SunIcon color="inherit" />
                )}
              </IconButton>

              <MenuButton ml={2} sx={{ cursor: "pointer" }} />
              {/* <LanguageSwitcher/> */}
            </Flex>
          </Flex>
        </Edges>
      </Container>
    </Headroom>
  )
}

export default Header
