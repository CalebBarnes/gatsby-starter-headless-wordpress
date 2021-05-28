import React from "react"
import Seo from "../components/seo"
import { Heading, Text } from "theme-ui"

import Edges from "../components/edges"

const NotFoundPage: React.FC = () => {
  return (
    <Edges>
      <Seo title="404 Not Found" />

      <Heading as="h1" sx={{ fontSize: 72 }} mb={3}>
        404
      </Heading>

      <Text>
        You just hit a route that doesn&#39;t exist... the sadness. 😭
      </Text>
    </Edges>
  )
}

export default NotFoundPage
