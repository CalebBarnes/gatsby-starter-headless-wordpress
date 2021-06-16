const { getContentNodes } = require(`./getContentNodes.js`)
const { createContentPages } = require(`./createContentPages.js`)
// const { getTaxonomies } = require(`./getTaxonomies.js`)

exports.createPages = async gatsbyUtilities => {
  const contentNodes = await getContentNodes(gatsbyUtilities)

  if (contentNodes.length >= 1) {
    await createContentPages({
      contentNodes,
      gatsbyUtilities,
    })
  }

  // const taxonomies = await getTaxonomies(gatsbyUtilities)

  // dd(taxonomies)
}
