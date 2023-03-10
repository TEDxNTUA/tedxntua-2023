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

    const infoPanels = aboutInfo.map(info => <InfoPanel key={info.id} header={info.header} formattedText={documentToReactComponents(JSON.parse(info.info.raw))} />);

    return (
        <Page currentPage={`about`}>
            { layouts }
            { infoPanels }
        </Page>
    )
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default About;