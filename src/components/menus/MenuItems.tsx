import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Text, Link as ThemedLink } from "theme-ui"

import useMenuItems from "./useMenuItems"

interface MenuItemsProps {
  location?: string
  slug?: string
}

const MenuItems: React.FC<MenuItemsProps> = (props: MenuItemsProps) => {
  const { location, slug } = props

  const menu = useMenuItems({ location, slug }) // only one is required

  return (
    <>
      {menu &&
        menu.map((menuItem: any, index: number) => {
          if (
            !menuItem?.connectedNode &&
            menuItem?.url &&
            menuItem.url.includes("http")
          ) {
            return (
              <ThemedLink
                key={index}
                href={menuItem?.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text>{menuItem?.label}</Text>
              </ThemedLink>
            )
          } else {
            return (
              <GatsbyLink key={index} to={menuItem?.url}>
                <Text>{menuItem?.label}</Text>
              </GatsbyLink>
            )
          }
        })}
    </>
  )
}

export default MenuItems
