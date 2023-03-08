import React from 'react';

import { usePerformerData } from '../hooks';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import DataLayout from '../containers/DataLayout';
import { useLocaleContext } from '../contexts/LanguageContext';

const pageTitle = 'Performers';

const Performers = () => {
    const { locale, _ } = useLocaleContext();
    const performerData = usePerformerData(locale);
    
    return (
        <Page currentPage={`performers`}>
            <DataLayout dataProp={performerData} type="performer" />
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Performers;