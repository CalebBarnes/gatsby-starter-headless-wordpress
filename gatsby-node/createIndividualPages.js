const path = require("path")
const fs = require("fs")

const createIndividualPages = async ({
  contentNodes,
  templatesPath,
  excludedNodeTypes,
  gatsbyUtilities: { actions, reporter },
}) =>
  Promise.all(
    contentNodes.map(({ id, uri, nodeType, template: { templateName } }) => {
      if (excludedNodeTypes.includes(nodeType)) {
        return
      }

      const contentTypeTemplatePath = `${templatesPath}/${nodeType}/${templateName}.js`

      const templateExists = fs.existsSync(contentTypeTemplatePath)

      if (!templateExists) {
        reporter.warn(`Template not found: ${contentTypeTemplatePath}`)
        return
      }

      return actions.createPage({
        path: uri,
        component: path.resolve(contentTypeTemplatePath),
        context: {
          id,
        },
      })
    })
  )

exports.createIndividualPages = createIndividualPages
