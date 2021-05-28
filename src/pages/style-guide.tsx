import React from "react"
import Seo from "../components/seo"
import { Heading, Text } from "theme-ui"
import { TypeScale, TypeStyle, ColorPalette } from "@theme-ui/style-guide"

import Edges from "../components/edges"

const StyleGuidePage: React.FC = () => {
  /**
   * ? A style guide page based on your Theme UI configuration
   */

  return (
    <Edges>
      <Seo title="Style Guide" />

      <Heading as="h1">Style Guide</Heading>

      <ColorPalette />

      <TypeScale />

      <TypeStyle fontFamily="heading" fontWeight="heading" lineHeight="heading">
        Aa
      </TypeStyle>

      <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body">
        Aa
      </TypeStyle>

      <h1>Heading H1</h1>
      <h2>Heading H2</h2>
      <h3>Heading H3</h3>
      <h4>Heading H4</h4>
      <h5>Heading H5</h5>
      <h6>Heading H6</h6>

      {/* <Heading as="h1">Heading H1</Heading>
      <Heading as="h2">Heading H2</Heading>
      <Heading as="h3">Heading H3</Heading>
      <Heading as="h4">Heading H4</Heading>
      <Heading as="h5">Heading H5</Heading>
      <Heading as="h6">Heading H6</Heading> */}

      <Text>Paragraph</Text>

      <br />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        egestas nec magna eget viverra. Vivamus semper non ipsum a tincidunt.
        Curabitur ultrices finibus metus quis posuere. Pellentesque in sapien in
        elit ultricies elementum. Pellentesque in purus sem. Aenean pharetra
        feugiat dui eu efficitur. Cras sollicitudin vestibulum eros non mollis.
        Ut convallis at mauris quis tincidunt. Suspendisse egestas neque mi, id
        posuere mauris tempus a. Duis vel cursus risus. Curabitur mattis, lorem
        quis mollis ultricies, sapien dui laoreet tellus, in consequat elit
        nulla imperdiet magna. Ut eget nisi eu orci commodo molestie quis eget
        sem. Suspendisse convallis nibh risus, in vestibulum ex venenatis in.
        Donec suscipit massa sapien, ut convallis ligula facilisis sed. Ut sit
        amet justo venenatis, consequat risus vel, egestas eros.
      </Text>
    </Edges>
  )
}

export default StyleGuidePage
