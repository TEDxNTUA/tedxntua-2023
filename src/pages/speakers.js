import React from 'react';

import { useSpeakersData } from '../hooks';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import DataLayout from '../containers/DataLayout';
import { useLocaleContext } from '../contexts/LanguageContext';

const pageTitle = 'Speakers';

const Speakers = () => {
    const { locale } = useLocaleContext();
    const speakersData = useSpeakersData(locale);

    return (
        <Page currentPage={`speakers`}>
            <DataLayout dataProp={speakersData} type="speaker" />
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Speakers;
