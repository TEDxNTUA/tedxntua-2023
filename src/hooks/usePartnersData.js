import { useStaticQuery, graphql } from "gatsby";

const usePartnersData = () => {
    return useStaticQuery(graphql`
    query {
        allContentfulPartners {
            nodes {
                bio {
                    raw
                }
                careerSiteUrl
                id
                image {
                    gatsbyImageData(width: 250, height: 250)
                }
                name
                websiteUrl
                sponsorLevel
                }
        }
      }`
    ).allContentfulPartners.nodes;
}

export default usePartnersData;