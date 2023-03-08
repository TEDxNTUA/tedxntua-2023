import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as styles from "../styles/main.module.css";
import * as speakerStyles from "../styles/data.module.css";

const Data = ({ fullName, picture, slug, speciality, type }) => {

    const url = type + 's';
    const image = getImage(picture);
    
    return (
        <Link
        className={`
        text-reset text-decoration-none
        ${speakerStyles.linkContainer}
        `}
        to={`/${url}/${fullName.toLowerCase().replace(/ /g, '-')}`}>
            <div className={`
                ${speakerStyles.container}
            `}>
                <GatsbyImage
                alt={ fullName }
                image={ image }
                className={`
                    ${speakerStyles.image}
                `} />
                <h1 className={`
                ${styles.textShadowPrimary}
                ${speakerStyles.caption}
                `}>
                    { fullName }
                </h1>
                <h4 className={`
                ${styles.textShadowPrimary}
                ${speakerStyles.caption}
                `}>
                    { speciality }
                </h4>
            </div>
        </Link>
    );
}

export default Data;