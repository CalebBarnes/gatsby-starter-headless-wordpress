import React from "react"
import Seo from "../components/seo"
import { PageProps } from "gatsby"

import { Heading, Text } from "theme-ui"

import Edges from "../components/edges"

const NotFoundPage = (props: PageProps) => {
  return (
    <Edges>
      <Seo title="404 Not Found" />

      <Heading sx={{ fontSize: 64 }}>404</Heading>

      <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
    </Edges>
  )
}

export default NotFoundPage
