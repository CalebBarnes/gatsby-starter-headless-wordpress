const fs = require("fs")
const { toCamel } = require(`./toCamel`)

const { options } = require(`../options`)

const getTemplatePath = async contentNode => {
  const {
    template: { templateName },
    isArchive = false,
    archiveContentType = null,
    contentType: {
      node: { graphqlSingleName },
    },
  } = contentNode

  let contentTypeTemplatePath = `${options.templatesPath}/${toCamel(
    graphqlSingleName
  )}/${toCamel(templateName)}.tsx`

  if (isArchive) {
    contentTypeTemplatePath = `${options.templatesPath}/archive/${toCamel(
      archiveContentType
    )}.tsx`
  }

  const templateExists = fs.existsSync(contentTypeTemplatePath)

  if (!templateExists) {
    reporter.warn(
      `Template "${templateName}" not found at "${contentTypeTemplatePath}" for node type "${nodeType}" on uri "${uri}"`
    )
    return
  }

  return contentTypeTemplatePath
}

exports.default = getTemplatePath
exports.getTemplatePath = getTemplatePath
