const { getContentNodes } = require(`./getContentNodes.js`)
const { createIndividualPages } = require(`./createIndividualPages.js`)

const templatesPath = `./src/templates`
const excludedNodeTypes = [`mediaItem`]

exports.createPages = async gatsbyUtilities => {
  // const plugins = await getPlugins()

  const contentNodes = await getContentNodes(gatsbyUtilities)

  if (contentNodes.length >= 1) {
    await createIndividualPages({
      excludedNodeTypes,
      contentNodes,
      templatesPath,
      gatsbyUtilities,
    })
  }
}
