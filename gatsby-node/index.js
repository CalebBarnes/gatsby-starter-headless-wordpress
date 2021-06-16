const { getContentNodes } = require(`./getContentNodes.js`)
const { createContentPages } = require(`./createContentPages.js`)

const templatesPath = `./src/templates`
const excludedNodeTypes = [`MediaItem`] // excludes creating pages for individual media items

exports.createPages = async gatsbyUtilities => {
  const contentNodes = await getContentNodes(gatsbyUtilities)

  if (contentNodes.length >= 1) {
    await createContentPages({
      excludedNodeTypes,
      contentNodes,
      templatesPath,
      gatsbyUtilities,
    })
  }
}
