import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import LinkedInIcon from './LinkedInIcon';

import * as styles from "../styles/main.module.css";
import * as memberStyles from "../styles/member.module.css";

const Member = ({ imageData, name="", linkedInUrl="", style, className, onMouseEnter, onMouseLeave }) => {

    const image = getImage(imageData);

    return (
        <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={ `${className} ${memberStyles.container}` }
        style={ style } >
            <a href={ linkedInUrl } >
                <GatsbyImage alt={ name } image={ image } />
            </a>
            <div className={memberStyles.caption}>
                <h5 className={`${styles.textShadowPrimary} ${memberStyles.name}`}>
                    { name }
                </h5>
                {linkedInUrl && <LinkedInIcon />}
            </div>

        </div>
    );
}

export default Member;