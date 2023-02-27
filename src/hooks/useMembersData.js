import { useStaticQuery, graphql } from "gatsby";

const useMembersData = (locale) => {
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
            node_locale
          }
        }
      }`
    ).allContentfulMembers.nodes.filter(node => node.node_locale === locale);
}

export default useMembersData;