import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { isMobile } from 'react-device-detect';

import { useMembersData, useAboutInfo } from '../hooks';
import { useLocaleContext } from '../contexts/LanguageContext';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import AboutTeamLayout from '../containers/AboutTeamLayout';
import InfoPanel from '../components/InfoPanel';
import MnemeLine from '../components/MnemeLine.js';

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
            name: "SPECIAL_THANKS",
            team: false,
        }
    ];

    const layouts = teams.map((team, index) => {
        
        const members = membersData.filter(member => member.team === team.code);
        members.sort((a, b) => a.order - b.order);
        const lineStyle = { justifyContent: 'center', marginTop: '20vh', marginBottom: isMobile ? '0':'8em' };
        const teamName = team.name.replace(/_/g, ' ');
        return (
            <>
                <MnemeLine text='MNEME' borderText={teamName} reverse style={lineStyle}/>
                <AboutTeamLayout key={team.code} members={members} teamName={team.name} showTeam={team.team} />
            </>
        );
    });

    const infoPanels = aboutInfo.map(info => (
        <>
            <MnemeLine style={{ justifyContent: 'center', width: '100%' }}/>
            <InfoPanel key={info.id} header={info.header} formattedText={documentToReactComponents(JSON.parse(info.info.raw))} />
        </>
    ));

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