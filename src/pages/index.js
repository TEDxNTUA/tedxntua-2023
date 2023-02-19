import * as React from 'react';

import Page from '../components/Page';
import PageHead from '../components/PageHead';

const pageTitle = 'Home';

const HomePage = () => {

    return (
        <Page currentPage={`home`}>
            <h1>
                Home Page
            </h1>
        </Page>
    );
};

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default HomePage;