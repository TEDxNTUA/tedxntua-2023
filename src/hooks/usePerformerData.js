import { useStaticQuery, graphql } from "gatsby";

const usePerformerData = () => {
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
          }
        }
      }
    `).allContentfulPerformers.nodes;
}

export default usePerformerData;