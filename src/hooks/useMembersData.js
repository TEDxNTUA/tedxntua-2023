import { useStaticQuery, graphql } from "gatsby";

const useMembersData = () => {
    return useStaticQuery(graphql`
    query {
        allContentfulMembers {
          nodes {
            order
            id
            name
            linkedInUrl
            team
            image {
              gatsbyImageData(width: 250, height: 250)
            }
          }
        }
      }`
    ).allContentfulMembers.nodes;
}

export default useMembersData;