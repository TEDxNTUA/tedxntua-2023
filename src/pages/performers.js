import React from 'react';

import { usePerformerData } from '../hooks';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import SpeakerLayout from '../containers/SpeakerLayout';

const pageTitle = 'Performers';

const Performers = () => {
    
    const performerData = usePerformerData();
    console.log(performerData);

    return (
        <Page currentPage={`performers`}>
            <SpeakerLayout speakerData={performerData} />
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Performers;