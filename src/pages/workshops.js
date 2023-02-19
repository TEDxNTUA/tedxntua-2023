import React from 'react';

import { useWorkshopData } from '../hooks';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import SpeakerLayout from '../containers/SpeakerLayout';

const pageTitle = 'Workshops';

const Workshops = () => {

    const workshopData = useWorkshopData();

    return (
        <Page currentPage={`workshops`}>
            <SpeakerLayout speakerData={workshopData} />
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Workshops;