import React from 'react';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import speakersData from "../hooks/speakersData"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const pageTitle = 'Speakers';

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

const Speakers = () => {
    const speaker = speakersData()
    return (
        <Page>
            {speaker.map(s => (
                <Speaker fullName={s.fullName} picture={s.picture} biography={s.biography} /> ))}
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Speakers;
