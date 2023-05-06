import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { useMembersData, useAboutInfo } from '../hooks';
import { useLocaleContext } from '../contexts/LanguageContext';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import AboutTeamLayout from '../containers/AboutTeamLayout';
import InfoPanel from '../components/InfoPanel';

const pageTitle = 'About Us';

const About = () => {
    const { locale } = useLocaleContext();
    const aboutInfo = useAboutInfo(locale);
    const membersData = useMembersData(locale);
    const teams = [
        {
            code: "DESIGN",
            name: "DESIGN",
        },
        {
            code: "FUNDRAISING",
            name: "FUNDRAISING",
        },
        {
            code: "EXPERIENCE",
            name: "EXPERIENCE"
        },
        {
            code: "MEDIA",
            name: "MEDIA",
        },
        {
            code: "PRODUCTION",
            name: "PRODUCTION",
        },
        {
            code: "SPEAKERS",
            name: "SPEAKERS",
        },
        {
            code: "DEV",
            name: "DEVELOPER",
        },
        {
            code: "THANKS",
            name: "SCPECIAL_THANKS",
            team: false,
        }
    ];

    const layouts = teams.map(team => {
        
        const members = membersData.filter(member => member.team === team.code);
        members.sort((a, b) => a.order - b.order);
        return (
            <AboutTeamLayout key={team.code} members={members} teamName={team.name} showTeam={team.team} />
        );
    });

    const infoPanels = aboutInfo.map(info => <InfoPanel key={info.id} header={info.header} formattedText={documentToReactComponents(JSON.parse(info.info.raw))} />);

    return (
        <Page currentPage={`about`}>
            <div style={{ padding: '.5em' }}>
                { layouts }
            </div>
            { infoPanels }
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default About;