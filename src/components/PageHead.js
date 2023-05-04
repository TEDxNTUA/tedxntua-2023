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
        <meta property='og:image' content='./seo_image.png'/>
        <meta name="description" content="TEDxNTUA 2023 is held this year, on Saturday, May 13th, at Athens Conservatoire. The theme of the event is MNEME. Join us in this journey, full of intriguing scientific talks, engaging performances and multifaceted workshops." />
        <meta property='og:site_name' content='TEDXNTUA 2023'/>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png"></link>
    </>
           
    );
}

export default PageHead;