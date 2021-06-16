const { getContentNodes } = require(`./getContentNodes`)
const { createContentPages } = require(`./createContentPages`)
const { getTaxonomies } = require(`./getTaxonomies`)
const { createTaxonomyPages } = require(`./createTaxonomyPages`)

exports.createPages = async gatsbyUtilities => {
  const contentNodes = await getContentNodes(gatsbyUtilities)

  if (contentNodes.length >= 1) {
    await createContentPages({
      contentNodes,
      gatsbyUtilities,
    })
  }

  const taxonomies = await getTaxonomies(gatsbyUtilities)

  if (taxonomies.length >= 1) {
    await createTaxonomyPages({
      taxonomies,
      gatsbyUtilities,
    })
  }
}
