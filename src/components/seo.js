import React from "react"
import { Helmet } from "react-helmet"

import Parser from "html-react-parser"

const Seo = props => {
  const { title, lang = "en", fullHead } = props

  console.log({ props })

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defer={false}
    >
      {fullHead && Parser(fullHead)}
    </Helmet>
  )
}

export default Seo
