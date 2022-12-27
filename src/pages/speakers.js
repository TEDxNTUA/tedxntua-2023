import React from 'react';

import { useSpeakersData } from '../hooks';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import Speaker from '../components/Speaker';

const pageTitle = 'Speakers';

const Speakers = () => {
    const speakersData = useSpeakersData();
    console.dir(speakersData);

    const speakers = speakersData.map(s => (
        <Speaker key={s.id} fullName={s.name} picture={s.image} biography={s.bio} />
    ));

    return (
        <Page>
            {speakers}
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Speakers;
