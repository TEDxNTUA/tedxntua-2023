import React from 'react';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Speaker = ({fullName, picture, biography}) => {

    const image = getImage(picture);
    
    return (
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <div style={{ flexGrow: 1 }}>
                <h1 style={{ marginBottom: 0 }}>{fullName}</h1>
                <GatsbyImage alt={ fullName } image={ image } />
                <p>{biography.biography}</p>
            </div>
        </div>
    );
}

export default Speaker;