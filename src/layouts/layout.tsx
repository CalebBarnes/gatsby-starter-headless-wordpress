import React from "react"
import Header from "../components/header"
import Seo from "../components/seo"

export const Layout = props => {
  const {
    children,
    pageContext: { seo },
  } = props

  return (
    <div>
      <Seo {...seo} />

      <Header />

      <main>{children}</main>

      <footer>© {new Date().getFullYear()}</footer>
    </div>
  )
}
