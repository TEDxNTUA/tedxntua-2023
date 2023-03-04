import { useStaticQuery, graphql } from "gatsby";

const usePartnersData = (locale) => {
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
                node_locale
                }
        }
      }`
    ).allContentfulPartners.nodes.filter(node => node.node_locale === locale);
}

export default usePartnersData;