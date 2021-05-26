import React from "react"
// import { Link, useStaticQuery, graphql } from "gatsby"
// import parse from "html-react-parser"

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>

      <footer>© {new Date().getFullYear()}</footer>
    </div>
  )
}

export default Layout
