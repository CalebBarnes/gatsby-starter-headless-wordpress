import React from "react"
import { Box } from "theme-ui"

import MenuItems from "./MenuItems"

const FooterMenu: React.FC = () => {
  return (
    <Box
      sx={{
        ">a": {
          display: "block",
        },
      }}
    >
      <MenuItems location="GATSBY_FOOTER_MENU" />
    </Box>
  )
}

export default FooterMenu
