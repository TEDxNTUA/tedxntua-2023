import { useStaticQuery, graphql } from "gatsby";

const useAboutInfo = (locale) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulAboutInfo(sort: {order: ASC}) {
            nodes {
                id
                header
                info {
                raw
                }
                node_locale
            }
            }
        }
    `).allContentfulAboutInfo.nodes;

    return data.filter(node => node.node_locale === locale);
};

export default useAboutInfo;