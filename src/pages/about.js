import React from 'react';

import { useMembersData } from '../hooks';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import Member from '../components/Member';

const pageTitle = 'About Us';

const About = () => {
    
    const membersData = useMembersData();

    const members = membersData.map(member => {        
        return (
            <Member key={ member.id } name={ member.name } team={ member.team }
            image={ member.image } linkedInUrl={ member.linkedInUrl } />
        );
    });

    return (
        <Page>
            <h1>About Page</h1>
            { members }
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default About;