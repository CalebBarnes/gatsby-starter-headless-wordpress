const path = require("path")
const fs = require("fs")

const { toCamel } = require(`./utils/toCamel`)
const { getContentSeo } = require(`./getContentSeo`)
const { createArchivePages } = require(`./createArchivePages`)

const createAllPages = async ({
  contentNodes,
  templatesPath,
  excludedNodeTypes,
  gatsbyUtilities: { actions, reporter, graphql },
}) =>
  Promise.all(
    contentNodes.map(
      async ({
        id,
        uri,
        nodeType,
        template: { templateName },
        isArchive = false,
        archiveContentType = null,
        contentType: {
          node: { graphqlSingleName },
        },
      }) => {
        if (excludedNodeTypes.includes(nodeType)) {
          return
        }

        const contentTypeTemplatePath = !!isArchive
          ? `${templatesPath}/archive/${toCamel(archiveContentType)}.js`
          : `${templatesPath}/${toCamel(graphqlSingleName)}/${toCamel(
              templateName
            )}.js`

        const templateExists = fs.existsSync(contentTypeTemplatePath)

        if (!templateExists) {
          reporter.warn(
            `Template "${templateName}" not found at "${contentTypeTemplatePath}" for post type "${nodeType}" on page "${uri}"`
          )
          return
        }

        const seo = await getContentSeo({ id, nodeType, graphql })

        if (isArchive) {
          await createArchivePages({
            archiveContentType,
            id,
            component: path.resolve(contentTypeTemplatePath),
            uri,
            contentNodes,
            graphql,
            actions,
            reporter,
          })
          return
        } else {
          return actions.createPage({
            path: uri,
            component: path.resolve(contentTypeTemplatePath),
            context: {
              id,
              seo,
            },
          })
        }
      }
    )
  )

exports.createAllPages = createAllPages
