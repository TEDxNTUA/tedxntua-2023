import React from 'react';

import Page from '../components/Page';
import PageHead from '../components/PageHead';

const pageTitle = 'Performers';

const Performers = () => {
    return (
        <Page>
            <h1>Performers Page</h1>
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Performers;