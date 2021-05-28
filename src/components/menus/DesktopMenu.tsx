import React from "react"
import { Flex } from "theme-ui"

import MenuItems from "./MenuItems"

const DesktopMenu: React.FC = () => {
  return (
    <Flex
      sx={{
        alignItems: "center",
        ">a": {
          display: "block",
          padding: "10px 20px",
        },
      }}
    >
      <MenuItems location="GATSBY_HEADER_MENU" />
    </Flex>
  )
}

export default DesktopMenu
