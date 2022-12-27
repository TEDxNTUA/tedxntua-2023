import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Member = (props) => {

    const image = getImage(props.image);

    return (
        <div style={{ display: 'flex', flexFlow: 'column' }}>
            <span>{ props.team } | { props.name }</span>
            <a href={ props.linkedInUrl } >
                <GatsbyImage alt={ props.name } image={ image } />
            </a>
        </div>
    );
}

export default Member;