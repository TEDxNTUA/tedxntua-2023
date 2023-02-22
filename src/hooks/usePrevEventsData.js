import { useStaticQuery, graphql } from "gatsby";

const usePrevEventsData = () => {
    return useStaticQuery(graphql`
        query {
            allContentfulPreviousEvents {
                nodes {
                    image {
                        gatsbyImageData(width: 600, height: 300)
                    }
                    url
                    year
                }
            }
        }
    `).allContentfulPreviousEvents.nodes;
};

export default usePrevEventsData;