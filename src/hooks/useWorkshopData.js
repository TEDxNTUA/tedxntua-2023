import { useStaticQuery, graphql } from "gatsby";

const useWorkshopData = () => {
    return useStaticQuery(graphql`
    query {
        allContentfulWorkshops {
          nodes {
            id
            name
            applicationFormUrl
            bio {
              raw
            }
            websiteUrl
            image {
              gatsbyImageData(width: 450, height: 450)
            }
            sideEventDescription {
              raw
            }
          }
        }
      }
    `).allContentfulWorkshops.nodes;
}

export default useWorkshopData;