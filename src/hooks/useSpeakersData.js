import { useStaticQuery, graphql } from "gatsby";

const useSpeakersData = (locale) => {
    return useStaticQuery(graphql`
    query {
        allContentfulSpeakers {
          nodes {
            id
            name
            socialMediaUrl
            speciality
            bio {
              raw
            }
            image {
              gatsbyImageData(width: 450, height: 450)
            }
            node_locale
          }
        }
      }`
    ).allContentfulSpeakers.nodes.filter(node => node.node_locale === locale);
}

export default useSpeakersData;