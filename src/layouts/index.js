import React from "react"
import Header from "../components/header"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      <main>{children}</main>

      <footer>© {new Date().getFullYear()}</footer>
    </div>
  )
}

export default Layout
