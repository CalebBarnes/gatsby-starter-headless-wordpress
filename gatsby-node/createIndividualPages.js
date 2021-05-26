const path = require("path")
const fs = require("fs")

// const { dd } = require("dumper.js")

const { getContentSeo } = require(`./getContentSeo`)

const createIndividualPages = async ({
  contentNodes,
  templatesPath,
  excludedNodeTypes,
  gatsbyUtilities: { actions, reporter, graphql },
}) =>
  Promise.all(
    contentNodes.map(
      async ({ id, uri, nodeType, template: { templateName } }) => {
        if (excludedNodeTypes.includes(nodeType)) {
          return
        }

        const contentTypeTemplatePath = `${templatesPath}/${nodeType}/${templateName}.js`

        const templateExists = fs.existsSync(contentTypeTemplatePath)

        if (!templateExists) {
          reporter.warn(`Template not found: ${contentTypeTemplatePath}`)
          return
        }

        const seo = await getContentSeo({ id, nodeType, graphql })

        return actions.createPage({
          path: uri,
          component: path.resolve(contentTypeTemplatePath),
          context: {
            id,
            seo,
          },
        })
      }
    )
  )

exports.createIndividualPages = createIndividualPages
