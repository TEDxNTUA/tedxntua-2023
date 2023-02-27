import React from 'react';

import { useSpeakersData } from '../hooks';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import SpeakerLayout from '../containers/SpeakerLayout';
import { useLocaleContext } from '../contexts/LanguageContext';

const pageTitle = 'Speakers';

const Speakers = () => {
    
    const {locale, _} = useLocaleContext();
    const speakersData = useSpeakersData(locale);

    return (
        <Page currentPage={`speakers`}>
            <SpeakerLayout speakerData={speakersData} />
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Speakers;
