import { useStaticQuery, graphql } from "gatsby";

const useSpeakersData = () => {
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
          }
        }
      }`
    ).allContentfulSpeakers.nodes;
}

export default useSpeakersData;