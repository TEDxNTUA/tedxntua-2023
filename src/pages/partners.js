import React from 'react';
import Page from '../components/Page';
import PageHead from '../components/PageHead';
import { PartnerComp } from '../components/partnerComp';

const pageTitle = 'Partners';

const Partners = () => {
    return (
        <Page>
            <div>
                <PartnerComp/>
            </div>
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Partners;