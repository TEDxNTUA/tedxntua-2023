import React from 'react';

import { useSpeakersData } from '../hooks';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import DataLayout from '../containers/DataLayout';

const pageTitle = 'Speakers';

const Speakers = () => {
    const speakersData = useSpeakersData();

    return (
        <Page currentPage={`speakers`}>
            <DataLayout dataProp={speakersData} type="speaker" />
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Speakers;
