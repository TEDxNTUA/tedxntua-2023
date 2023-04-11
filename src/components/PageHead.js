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
    <>
        <title>{ siteTitle } | { pageTitle }</title>
        <meta property='og:type' content='website'/>
        <meta property='og:image' content=''/>
        <meta property='og:site_name' content='TEDXNTUA 2023'/>
    </>
           
    );
}

export default PageHead;