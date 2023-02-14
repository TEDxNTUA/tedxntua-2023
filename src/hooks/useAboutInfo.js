import { useStaticQuery, graphql } from "gatsby";

const useAboutInfo = () => {
    return useStaticQuery(graphql`
    query {
      allContentfulAboutInfo(sort: {order: ASC}) {
        nodes {
          id
          header
          info {
            raw
          }
        }
      }
    }
    `).allContentfulAboutInfo.nodes;
}

export default useAboutInfo;