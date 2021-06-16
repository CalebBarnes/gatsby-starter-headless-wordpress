const path = require("path")

const { getContentSeo } = require(`./getContentSeo`)
const { createArchivePages } = require(`./createArchivePages`)
const { getTemplatePath } = require(`./utils/getTemplatePath`)

const { options } = require(`./options`)

const createContentPages = async ({
  contentNodes,
  gatsbyUtilities: { actions, reporter, graphql },
}) =>
  Promise.all(
    contentNodes.map(async contentNode => {
      const {
        id,
        uri,
        nodeType,
        isArchive = false,
        archiveContentType = null,
      } = contentNode

      if (options.excludedNodeTypes.includes(nodeType)) {
        return
      }

      const contentTypeTemplatePath = await getTemplatePath(contentNode)

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
        reporter.verbose(`Creating ${nodeType} at ${uri}`)

        return actions.createPage({
          path: uri,
          component: path.resolve(contentTypeTemplatePath),
          context: {
            id,
            seo,
          },
        })
      }
    })
  )

exports.createContentPages = createContentPages
