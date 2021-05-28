const path = require("path")
const fs = require("fs")

const { toCamel } = require(`./utils/toCamel`)
const { getContentSeo } = require(`./getContentSeo`)
const { createArchivePages } = require(`./createArchivePages`)

const createContentPages = async ({
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

        // todo: handle resolving template components better
        // todo: support .js, .jsx, .ts, and .tsx

        const contentTypeTemplatePath = !!isArchive
          ? `${templatesPath}/archive/${toCamel(archiveContentType)}.tsx`
          : `${templatesPath}/${toCamel(graphqlSingleName)}/${toCamel(
              templateName
            )}.tsx`

        const templateExists = fs.existsSync(contentTypeTemplatePath)

        if (!templateExists) {
          reporter.warn(
            `Template "${templateName}" not found at "${contentTypeTemplatePath}" for node type "${nodeType}" on uri "${uri}"`
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
            seo,
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

exports.createContentPages = createContentPages
