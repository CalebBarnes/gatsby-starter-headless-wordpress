import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box } from "theme-ui"

interface Props {
  language?: any
  translations?: any
  onClick?: () => void
  className?: string
}

const LanguageSwitcher: React.FC<Props> = (props: Props) => {
  const { language: currentLang, translations, onClick, className } = props
  const {
    wp: { defaultLanguage, languages },
  } = useStaticQuery(graphql`
    {
      wp {
        defaultLanguage {
          id
          locale
          name
          slug
        }
        languages {
          id
          locale
          name
          slug
        }
      }
    }
  `)

  // set default language slug to "/"
  // if no current language is set, default language is "active"
  // else current language is "active"
  const filteredLanguages = languages.map((lang: { slug: any }) => {
    return {
      ...lang,
      active: !currentLang?.slug
        ? lang.slug === defaultLanguage.slug
        : lang.slug === currentLang.slug,
      slug: lang.slug === defaultLanguage.slug ? "/" : lang.slug,
    }
  })

  const removedActiveLanguage = filteredLanguages.filter(
    (lang: { active: any }) => {
      return !lang.active && lang
    }
  )

  return (
    <Box>
      {translations && translations.length >= 1
        ? translations.map((translation: any, index: number) => {
            return (
              <Link
                key={index}
                to={translation.uri}
                replace
                className="menu-item"
                onClick={onClick}
              >
                {translation.language.name}
              </Link>
            )
          })
        : removedActiveLanguage &&
          removedActiveLanguage.map((lang: any, index: number) => {
            return (
              <Link
                key={index}
                to={lang.slug === `/` ? `${lang.slug}` : `/${lang.slug}`}
                className="menu-item"
                onClick={onClick}
              >
                {lang.name}
              </Link>
            )
          })}
    </Box>
  )
}

export default LanguageSwitcher
