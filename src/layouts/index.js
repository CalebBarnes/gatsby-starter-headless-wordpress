import React from "react"

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>

      <footer>© {new Date().getFullYear()}</footer>
    </div>
  )
}

export default Layout
