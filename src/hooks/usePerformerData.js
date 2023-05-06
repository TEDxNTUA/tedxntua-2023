import { useStaticQuery, graphql } from "gatsby";

const usePerformerData = (locale) => {
    return useStaticQuery(graphql`
    query {
        allContentfulPerformers {
          nodes {
            bio {
              raw
            }
            id
            image {
              gatsbyImageData(width: 450, height: 450)
            }
            name
            socialMediaUrl
            subtitle
            node_locale
            slug
          }
        }
      }
    `).allContentfulPerformers.nodes.filter(node => node.node_locale === locale);
}

export default usePerformerData;