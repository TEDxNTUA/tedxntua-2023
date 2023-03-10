import * as React from 'react';
import Page from '../components/Page';
import PageHead from '../components/PageHead';
import {Partner} from "../components/Partner"
import * as PartnersStyles from "../styles/partners.module.css"
import { Container } from 'reactstrap';
import * as Styles from "../styles/main.module.css"
import { usePartnersData } from '../hooks';
import { useLocaleContext } from '../contexts/LanguageContext';

const pageTitle = 'Partners';

const Partners = () => {
    const {locale} = useLocaleContext();
const partnersData = usePartnersData(locale);

const KnowledgePartners = partnersData.map(type=>{
    if(type.sponsorLevel === "knowledge"){
        return <Partner key={type.id} name={type.name} bio={type.bio.raw} websiteUrl={type.websiteUrl} careerUrl={type.careerUrl} image={type.image}/>
    }
    return;
})
const PlatinumSponsors = partnersData.map(type=>{
    if(type.sponsorLevel === "platinum"){
        return <Partner key={type.id} name={type.name} bio={type.bio.raw} websiteUrl={type.websiteUrl} careerUrl={type.careerUrl} image={type.image}/>
    }
    return;
})
const GrandSponsors = partnersData.map(type=>{
    if(type.sponsorLevel === "grand"){
        return <Partner key={type.id} name={type.name} bio={type.bio.raw} websiteUrl={type.websiteUrl} careerUrl={type.careerUrl} image={type.image}/>
    }
})
const Partners = partnersData.map(type=>{
    if(type.sponsorLevel === "partners"){
        return <Partner key={type.id} name={type.name} bio={type.bio.raw} websiteUrl={type.websiteUrl} careerUrl={type.careerUrl} image={type.image}/>
    }
    return;
})
const Supporters = partnersData.map(type=>{
    if(type.sponsorLevel === "supporters"){
        return <Partner key={type.id} name={type.name} bio={type.bio.raw} websiteUrl={type.websiteUrl} careerUrl={type.careerUrl} image={type.image}/>
    }
    return;
})
    return (
        <Page currentPage={`partners`}>
            <Container className={PartnersStyles.container}>
                <div className={PartnersStyles.titles}>
                    <div>
                        <h1 className={`${PartnersStyles.title} ${Styles.textShadowPrimary}`}>Knowledge Partner</h1>
                        <div className={PartnersStyles.section}>{KnowledgePartners}</div>
                    </div>
                    <div>
                        <h1 className={`${PartnersStyles.title} ${Styles.textShadowPrimary}`}>Platinum Sponsors</h1>
                        <div className={PartnersStyles.section}>{PlatinumSponsors}</div>
                    </div>
                    <div>
                        <h1 className={`${PartnersStyles.title} ${Styles.textShadowPrimary}`}>Grand Sponsors</h1>
                        <div className={PartnersStyles.section}>{GrandSponsors}</div>
                    </div>
                    <div>
                        <h1 className={`${PartnersStyles.title} ${Styles.textShadowPrimary}`}>Partners</h1>
                        <div className={PartnersStyles.section}>{Partners}</div>
                    </div>
                    <div>
                        <h1 className={`${PartnersStyles.title} ${Styles.textShadowPrimary}`}>Supporters</h1>
                        <div className={PartnersStyles.section}>{Supporters}</div>
                    </div>
                    

                </div>
            </Container>
        </Page>
        
    );
}

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default Partners;