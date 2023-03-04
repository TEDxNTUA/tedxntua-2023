import React from 'react';

import { Container } from 'reactstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from 'gatsby';

import * as headerStyles from "../styles/header.module.css";
import * as styles from "../styles/main.module.css";
import * as dataPageStyles from "../styles/dataPage.module.css";
import * as dataStyles from "../styles/data.module.css";

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
        <Container className={dataPageStyles.dataContainer}>
            <GatsbyImage image={image}
                         className={`
                         ${dataPageStyles.image}
                        ${dataStyles.image}
                    `} />
            <div>
                <Link to={socialMediaUrl}
                    className={`
                    text-reset text-decoration-none
                    ${styles.textShadowPrimary}
                    ${headerStyles.link}
                    `}>
                        {altText}
                </Link>
                {appFormUrl != undefined &&
                    <Link to={appFormUrl}
                    className={`
                    text-reset text-decoration-none
                    ${styles.textShadowPrimary}
                    ${headerStyles.link}
                    `}>
                        {' - Application Form'}
                    </Link>
                }
            </div>
            <h3>{props.pageContext.name}</h3>
            <h4>{props.pageContext.speciality}</h4>
            <p>{documentToReactComponents(JSON.parse(props.pageContext.bio.raw))}</p>
            <div>
                <Link to={`/${url}`}
                    className={`
                    text-reset text-decoration-none
                    ${styles.textShadowPrimary}
                    ${headerStyles.link}
                    `}>
                        Back
                </Link>
            </div>
        </Container>
    );
}

export default DataPage;