import React, { useEffect } from 'react';

import { Container } from 'reactstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from 'gatsby';
import PageHead from '../components/PageHead';
import Page from '../components/Page';
import { useLocaleContext } from '../contexts/LanguageContext';

import * as dataPageStyles from "../styles/dataPage.module.css";
import * as dataStyles from "../styles/data.module.css";

function DataPage(props) {
    const { locale } = useLocaleContext();
    const url = props.pageContext.type + 's';
    const image = getImage(props.pageContext.image);
    let socialMediaUrl,
        altText,
        appFormUrl = undefined;

    switch(props.pageContext.type) {
        case 'speaker':
        case 'performer':
            socialMediaUrl = props.pageContext.socialMediaUrl;
            altText = 'LINKEDIN';
            break;
        case 'workshop':
            socialMediaUrl = props.pageContext.websiteUrl;
            altText = (locale === 'el-GR') ? 'ΙΣΤΟΣΕΛΊΔΑ':'WEBSITE';
            appFormUrl = props.pageContext.applicationFormUrl;
            break;
        default:
            throw new Error(`Type ${props.pageContext.type} is invalid. Must be one of the following: speaker, performer, workshop`);
    }

    useEffect(() => {
        // scroll to top on initial render
        document.body.scrollTo(0, 0);
    })

    return (
        <Page currentPage={`/${url}/${props.pageContext.pageName}`}>
            <PageHead pageTitle={props.pageContext.name} /> 
            <Container className={dataPageStyles.dataPageContainer}>
                <Link to={`/${url}`}
                    className={`
                    ${dataPageStyles.dataPageBackButton}
                    ${dataPageStyles.dataPageButton}`}>
                        { (locale === 'el-GR') ? 'ΠΊΣΩ':'BACK' }
                </Link>
                <GatsbyImage image={image}
                            className={`
                            ${dataPageStyles.dataPageImage}
                            ${dataStyles.image}
                            `}
                            alt={altText} />
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
                            {(locale === 'el-GR') ? 'ΔΙΕΚΔΊΚΗΣΕ ΤΗΝ ΘΈΣΗ ΣΟΥ':'CLAIM YOUR SPOT'}
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
                <div>
                    <h3
                    className={dataPageStyles.dataPageSectionMeta}>
                        {(locale === 'el-GR') ? 'Βιογραφικό:':'Bio:'}
                    </h3>
                    <p
                    className={dataPageStyles.dataPageBody}>
                        {documentToReactComponents(JSON.parse(props.pageContext.bio.raw))}
                    </p>
                </div>
                {appFormUrl != undefined &&
                    <div>
                        <h3
                        className={dataPageStyles.dataPageSectionMeta}>
                            Workshop Description:
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