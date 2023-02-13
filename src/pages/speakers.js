import React from 'react';

import { useSpeakersData } from '../hooks';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import SpeakerLayout from '../containers/SpeakerLayout';

const pageTitle = 'Speakers';

const Speakers = () => {
    const speakersData = useSpeakersData();
    console.dir(speakersData);


    return (
        <Page>
            <SpeakerLayout speakerData={speakersData} />
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Speakers;
