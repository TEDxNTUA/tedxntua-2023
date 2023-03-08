import React from 'react';

import { usePerformerData } from '../hooks';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import DataLayout from '../containers/DataLayout';

const pageTitle = 'Performers';

const Performers = () => {
    const performerData = usePerformerData();
    
    return (
        <Page currentPage={`performers`}>
            <DataLayout dataProp={performerData} type="performer" />
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Performers;