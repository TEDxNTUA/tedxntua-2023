import { useStaticQuery, graphql } from "gatsby";

const usePrevEventsData = (locale) => {
    return useStaticQuery(graphql`
        query {
            allContentfulPreviousEvents {
                nodes {
                    image {
                        gatsbyImageData(width: 600, height: 300)
                    }
                    url
                    year
                    node_locale
                }
            }
        }
    `).allContentfulPreviousEvents.nodes.filter(node => node.node_locale === locale);
};

export default usePrevEventsData;