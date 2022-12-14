import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const PageHead = ({ pageTitle }) => {
    
    const siteTitle = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `).site.siteMetadata.title;

    return (
        <title>{ siteTitle } | { pageTitle }</title>
    );
}

export default PageHead;