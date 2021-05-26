const getContentSeo = async ({ id, nodeType, graphql }) => {
  const {
    data: {
      [`wp${nodeType}`]: { seo },
    },
  } = await graphql(
    /* GraphQL */ `
         query ContentNode($id: String!) {
           wp${nodeType}(id: { eq: $id }) {
                 seo {
                    metaDesc
                    title
                    canonical
                    cornerstone
                    focuskw
                    fullHead
                    metaKeywords
                    metaRobotsNofollow
                    metaRobotsNoindex
                    opengraphAuthor
                    opengraphDescription
                    opengraphModifiedTime
                    opengraphPublishedTime
                    opengraphPublisher
                    opengraphSiteName
                    opengraphTitle
                    opengraphType
                    opengraphUrl
                    readingTime
                    twitterTitle
                    twitterDescription
                    breadcrumbs {
                        text
                        url
                    }
                    twitterImage {
                        altText
                        sourceUrl
                    }
                }
           }
         }
      `,
    { id }
  )

  return seo
}

exports.getContentSeo = getContentSeo
