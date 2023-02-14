import React from 'react';

import Page from '../components/Page';
import PageHead from '../components/PageHead';

const pageTitle = 'Partners';

const Partners = () => {
    return (
        <Page currentPage={`partners`}>
            <h1>Partners Page</h1>
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Partners;