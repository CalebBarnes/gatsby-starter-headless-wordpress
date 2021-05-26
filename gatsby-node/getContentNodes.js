async function getContentNodes({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpContentNodes {
      allWpContentNode {
        nodes {
          id
          uri
          nodeType
          template {
            templateName
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your site content`,
      graphqlResult.errors
    )
    return
  }
  return graphqlResult.data.allWpContentNode.nodes
}

exports.getContentNodes = getContentNodes
