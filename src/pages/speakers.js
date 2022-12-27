import React from 'react';

import { useSpeakersData } from '../hooks';

import Page from '../components/Page';
import PageHead from '../components/PageHead';

const pageTitle = 'Speakers';

const Speakers = () => {

    const speakersData = useSpeakersData();

    // TODO: create Speaker component and map each speaker's data to a Speaker component  

    return (
        <Page>
            <h1>Speakers Page</h1>
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Speakers;