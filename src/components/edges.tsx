import React from "react"
import { Container } from "theme-ui"

interface EdgesProps {
  size?: "sm" | "md" | "lg"
  children?: any
  [x: string]: any
}

const Edges = (props: EdgesProps) => {
  const { size, sx, ...rest } = props

  return (
    <Container
      sx={{
        mx: "auto",
        width: "90%",
        maxWidth: () => {
          switch (size) {
            case "sm":
              return 600
            case "md":
              return 1024
            case "lg":
              return 1280
            default:
              return 1280
          }
        },
        ...sx,
      }}
      {...rest}
    />
  )
}

export default Edges
