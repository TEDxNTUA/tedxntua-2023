import React from 'react';

import { useMembersData } from '../hooks';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import AboutTeamLayout from '../containers/AboutTeamLayout';

const pageTitle = 'About Us';

const About = () => {
    
    const membersData = useMembersData();
    const teams = [
        {
            code: "DEV",
            name: "DEVELOPER",
        },
        {
            code: "MEDIA",
            name: "MEDIA",
        },
        {
            code: "DESIGN",
            name: "DESIGN",
        },
        {
            code: "PRODUCTION",
            name: "PRODUCTION",
        },
        {
            code: "FUNDRAISING",
            name: "FUNDRAISING",
        },
        {
            code: "SPEAKERS",
            name: "SPEAKERS",
        },
        {
            code: "EXPERIENCE",
            name: "EXPERIENCE"
        },
    ];

    const layouts = teams.map(team => {
        
        const members = membersData.filter(member => member.team === team.code);
        members.sort((a, b) => a.order - b.order);
        return (
            <AboutTeamLayout key={team.code} members={members} teamName={team.name} />
        );
    });

    return (
        <Page>
            { layouts }
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default About;