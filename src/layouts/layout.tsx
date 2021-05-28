import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"

export const Layout = (props: any) => {
  const {
    children,
    pageContext: { seo },
  } = props

  return (
    <div>
      <Seo {...seo} />

      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  )
}
