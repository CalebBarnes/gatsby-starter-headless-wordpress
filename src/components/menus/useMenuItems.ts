import { graphql, useStaticQuery } from "gatsby"

interface UseMenuItemsProps {
  location?: string
  slug?: string
}

const useMenuItems = ({ location, slug }: UseMenuItemsProps) => {
  if (!location && !slug) {
    console.warn(`useMenuItems requires either a slug or location parameter`)
    console.warn(
      `useMenuItems example slug: "main-menu", example location: "GATSBY_HEADER_MENU"`
    )
    return null
  }

  const {
    allWpMenu: { nodes },
  } = useStaticQuery(graphql`
    {
      allWpMenu {
        nodes {
          slug
          locations
          menuItems {
            nodes {
              connectedNode {
                node {
                  uri
                }
              }
              url
              label
              target
              parentDatabaseId
              cssClasses
            }
          }
        }
      }
    }
  `)

  if (location) {
    const menu =
      nodes && nodes.find((node: any) => node.locations.includes(location))

    return menu?.menuItems?.nodes
  } else if (slug) {
    const menu = nodes.find((node: any) => node.slug === slug)

    return menu?.menuItems?.nodes
  }
}

export default useMenuItems
