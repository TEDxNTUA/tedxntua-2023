import React from 'react';

import { Container } from 'reactstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from 'gatsby';

import * as dataPageStyles from "../styles/dataPage.module.css";
import * as dataStyles from "../styles/data.module.css";
import Page from '../components/Page';

function DataPage(props) {
    const url = props.pageContext.type + 's';
    const image = getImage(props.pageContext.image);
    let socialMediaUrl,
        altText,
        appFormUrl = undefined;

    switch(props.pageContext.type) {
        case 'speaker':
        case 'performer':
            socialMediaUrl = props.pageContext.socialMediaUrl;
            altText = 'LinkedIn';
            break;
        case 'workshop':
            socialMediaUrl = props.pageContext.websiteUrl;
            altText = 'Website';
            appFormUrl = props.pageContext.applicationFormUrl;
            break;
    }

    return (
        <Page currentPage={`/${url}/${props.pageContext.pageName}`}>   
            <Container className={dataPageStyles.dataPageContainer}>
                <Link to={`/${url}`}
                    className={`
                    ${dataPageStyles.dataPageBackButton}
                    ${dataPageStyles.dataPageButton}`}>
                        Back
                </Link>
                <GatsbyImage image={image}
                            className={`
                            ${dataPageStyles.dataPageImage}
                            ${dataStyles.image}
                            `} />
                <div
                className={dataPageStyles.dataPageSocialLinks}>
                    <Link to={socialMediaUrl}
                        className={`
                        ${dataPageStyles.dataPageButton}
                        ${dataPageStyles.dataPageSocialButton}`}>
                            {altText}
                    </Link>
                    {appFormUrl != undefined &&
                        <Link to={appFormUrl}
                        className={`
                        ${dataPageStyles.dataPageButton}
                        ${dataPageStyles.dataPageSocialButton}`}>
                            {'Application Form'}
                        </Link>
                    }
                </div>
                <h3
                className={dataPageStyles.dataPageMeta}>
                    {props.pageContext.name}
                </h3>
                <h4
                className={dataPageStyles.dataPageMeta}>
                    {props.pageContext.speciality}
                </h4>
                <p
                className={dataPageStyles.dataPageBody}>
                    {documentToReactComponents(JSON.parse(props.pageContext.bio.raw))}
                </p>
                {appFormUrl != undefined &&
                    <div
                    className={dataPageStyles.dataPageSideEvent}>
                        <h3
                        className={dataPageStyles.dataPageMeta}>
                            Workshop Description
                        </h3>
                        <p
                        className={dataPageStyles.dataPageBody}>
                            {documentToReactComponents(JSON.parse(props.pageContext.sideEventDescription.raw))}
                        </p>
                    </div>
                }
            </Container>
        </Page>
    );
}

export default DataPage;