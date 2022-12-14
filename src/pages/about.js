import React from 'react';

import Page from '../components/Page';
import PageHead from '../components/PageHead';

const pageTitle = 'About Us';

const About = () => {
    return (
        <Page>
            <h1>About Page</h1>
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default About;