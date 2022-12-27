import { useStaticQuery, graphql } from "gatsby";

const useMembersData = () => {
    return useStaticQuery(graphql`
    query {
        allContentfulMembers {
          nodes {
            id
            name
            linkedInUrl
            team
            image {
              gatsbyImageData(width:200)
            }
          }
        }
      }`
    ).allContentfulMembers.nodes;
}

export default useMembersData;