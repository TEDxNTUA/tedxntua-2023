import { useStaticQuery, graphql } from "gatsby";

const useWorkshopData = (locale) => {
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
            node_locale
          }
        }
      }
    `).allContentfulWorkshops.nodes.filter(node => node.node_locale === locale);
}

export default useWorkshopData;