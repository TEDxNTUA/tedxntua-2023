import { graphql, useStaticQuery } from 'gatsby';

export default () => {
    const { allContentfulSpeakers } = useStaticQuery(
        graphql`
            query ALL_CONTENTFUL_SPEAKERS {
                allContentfulSpeakers {
                    nodes {
                        fullName
                        picture { gatsbyImageData(width: 200) }
                        biography { biography }
                    }
                }
            }
        `
    );
    return allContentfulSpeakers.nodes;
}
