import React from 'react';

import Page from '../components/Page';
import PageHead from '../components/PageHead';

const pageTitle = 'Workshops';

const Workshops = () => {
    return (
        <Page>
            <h1>Workshops Page</h1>
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Workshops;