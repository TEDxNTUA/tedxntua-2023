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
              gatsbyImageData(width: 200)
            }
          }
        }
      }`
    ).allContentfulSpeakers.nodes;
}

export default useSpeakersData;