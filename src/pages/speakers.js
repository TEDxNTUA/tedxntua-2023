import React from 'react';

import Page from '../components/Page';
import PageHead from '../components/PageHead';

const pageTitle = 'Speakers';

const Speakers = () => {
    return (
        <Page>
            <h1>Speakers Page</h1>
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Speakers;