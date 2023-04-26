import * as React from 'react';
import { Row } from 'reactstrap';
import { Canvas } from "react-three-fiber";
import { isMobile } from 'react-device-detect';
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import GLB from "../components/scene.glb";
import ModelLoader from '../components/ModelLoader';

import { useLocaleContext } from '../contexts/LanguageContext';
import { useHomeInfo, usePerformerData, useSpeakersData, useWorkshopData } from '../hooks';

import * as styles from "../styles/main.module.css";
import * as homeStyles from "../styles/home.module.css";
import MnemeLine from '../components/MnemeLine';

const pageTitle = 'Home';

const HomePage = () => {

    const { locale } = useLocaleContext();
    const homeInfo = useHomeInfo(locale);
    const locationImage = getImage(homeInfo.locationImage);
    const mapsHtml = JSON.parse(homeInfo.mapsHtml.raw).content[0].content[0].value;
    const locationInstructionsHeader = (locale === 'el-GR' ? 'ΩΔΕΙΟΝ ΑΘΗΝΩΝ':'ATHENS CONSERVATOIRE');
    const MnemeLineText = (locale === 'el-GR' ? 'ΜΝΗΜΗ':'ΜΝΕΜΕ')
    const MnemeLineBorderText = (locale === 'el-GR' ? '13 ΜΑΙΟΥ':'MAY 13')

    const workshopsNumber = useWorkshopData(locale).length
    const speakersNumber = useSpeakersData(locale).length
    const performersNumber = usePerformerData(locale).length

    return (
        <Page currentPage={`home`}>
            <Row className={homeStyles.titleSectionContainer}>
                <div className={styles.mnemeLogoImage}>
                    <StaticImage className={styles.mnemeCenteredImage} src='../images/MNEMElogo.png' />
                    <h1 className={homeStyles.eventDate}>13<span>.</span>05<span>.</span>2023</h1>
                    <h3>{ homeInfo.location }</h3> 
                </div>
                <div className={homeStyles.flowerImage} style={{ display: isMobile ? 'none':'auto' }}>
                    <StaticImage src='../images/flower.png' />
                </div>
                <div className={homeStyles.infoContainer}>
                    <a href={ homeInfo.ticketUrl } className={`text-reset text-decoration-none`}>
                        <div className={homeStyles.bookingButton}>
                            BOOK YOUR TICKETS NOW
                        </div>
                    </a>
                </div>
            </Row>
            <Row className={homeStyles.themeInfoRow}>
                <div className={homeStyles.themeInfoContainer}>
                    {/* <div className={homeStyles.themeInfoBackground}></div>
                    <div className={homeStyles.themeInfoBackground}></div>
                    <div className={homeStyles.themeInfoBackground}></div> */}
                    <MnemeLine reverse text={MnemeLineText} borderText={MnemeLineBorderText} />
                    <StaticImage style={{ width: '20vw', display: isMobile ? 'none':'' }} src='../images/MNEMElogo.png' />
                    {documentToReactComponents(JSON.parse(homeInfo.themeInfo.raw))}
                    {
                        isMobile ?
                        <StaticImage className={homeStyles.infoImageMobile} src='../images/flower.png' />
                        :
                        <StaticImage className={homeStyles.infoImage} src='../images/mneme_with_flowers_2.jpg' />
                    }
                </div>
            </Row>
            <Row className={homeStyles.infoSectionContainer}>
                <Row className={homeStyles.infoSectionRow}>
                    <MnemeLine text='WORKSHOPS' borderText={workshopsNumber} className={homeStyles.infoSectionLine} />
                </Row>
                <Row className={homeStyles.infoSectionRow}>
                    <MnemeLine text='SPEAKERS' borderText={speakersNumber} reverse className={homeStyles.infoSectionLine} />
                </Row>
                <Row className={homeStyles.infoSectionRow}>
                    <MnemeLine text='PERFORMERS' borderText={performersNumber} className={homeStyles.infoSectionLine} />
                </Row>
            </Row>
            <Row className={homeStyles.locationRow}>
                <StaticImage className={homeStyles.locationImage} src="../images/Odeon.png" />
                <div className={homeStyles.locationInfoSuperContainer}>
                    <div className={homeStyles.locationInfoContainer}>
                        {/* <div className={homeStyles.locationInfoHead}>
                            <div className={homeStyles.locationInfoLine}></div>
                            <div className={homeStyles.locationInfo}>
                                <div className={homeStyles.locationInfoTitle}>
                                    MNEME
                                </div>
                                <div className={homeStyles.locationInfoDate}>
                                    MAY 13
                                </div>
                            </div>
                        </div> */}
                        <MnemeLine text={MnemeLineText} borderText={MnemeLineBorderText} />
                        <div className={homeStyles.locationHeader}>
                            <div className={homeStyles.locationLargeRect}></div>
                            <div className={homeStyles.locationSmallRect}></div>
                            <h3 className={homeStyles.locationHeaderText}>
                                { locationInstructionsHeader }
                            </h3>
                        </div>
                        { documentToReactComponents(JSON.parse(homeInfo.howToGetThere.raw)) }
                        <div dangerouslySetInnerHTML={{__html: mapsHtml }} />
                    </div>
                </div>
            </Row>
        </Page>
    );
};

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default HomePage;
