import { useStaticQuery, graphql } from "gatsby";

const useHomeInfo = (locale) => {
    return useStaticQuery(graphql`
    query {
        allContentfulHomePageInfo(filter: {year: {eq: 2023}}) {
          nodes {
            date
            howToGetThere {
              raw
            }
            location
            mapsHtml {
              raw
            }
            node_locale
            themeInfo {
              raw
            }
            ticketUrl
          }
        }
      }`
    ).allContentfulHomePageInfo.nodes.filter(node => node.node_locale === locale)[0];
}

export default useHomeInfo;