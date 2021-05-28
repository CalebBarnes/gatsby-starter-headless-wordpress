import React from "react"
import { Helmet } from "react-helmet"

import parse from "html-react-parser"

const Seo = props => {
  const { title, lang = "en", fullHead } = props

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defer={false}
    >
      {fullHead && parse(fullHead)}
    </Helmet>
  )
}

export default Seo
