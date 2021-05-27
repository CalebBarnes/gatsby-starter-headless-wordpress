const { getContentNodes } = require(`./getContentNodes.js`)
const { createAllPages } = require(`./createAllPages.js`)

const templatesPath = `./src/templates`
const excludedNodeTypes = [`mediaItem`]

exports.createPages = async gatsbyUtilities => {
  const contentNodes = await getContentNodes(gatsbyUtilities)

  if (contentNodes.length >= 1) {
    await createAllPages({
      excludedNodeTypes,
      contentNodes,
      templatesPath,
      gatsbyUtilities,
    })
  }
}
