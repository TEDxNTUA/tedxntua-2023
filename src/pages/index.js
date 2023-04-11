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
import { useHomeInfo } from '../hooks';

import * as styles from "../styles/main.module.css";
import * as homeStyles from "../styles/home.module.css";

const pageTitle = 'Home';

const HomePage = () => {

    const { locale } = useLocaleContext();
    const homeInfo = useHomeInfo(locale);
    const locationImage = getImage(homeInfo.locationImage);
    const mapsHtml = JSON.parse(homeInfo.mapsHtml.raw).content[0].content[0].value;
    const locationInstructionsHeader = (locale === 'el-GR' ? 'ΩΔΕΙΟΝ ΑΘΗΝΩΝ':'ATHENS CONSERVATOIRE');

    // store mouse position as ref instead of state to prevent
    // re-rendering which stops touch detection and leads to
    // improper "ontouchmove" behaviour
    const active = React.useRef({active: false});
    const mousePos = React.useRef({x: 0, y: 0});
    const initPos = React.useRef({x: 0, y: 0});

    const updateMousePos = (e) => {

        if (!e.touches && isMobile) return;

        const client = {
            x: isMobile ? e.touches[0].clientX : e.clientX,
            y: isMobile ? e.touches[0].clientY : e.clientY,
        };

        if (isMobile) {
            const sensitivity = 5;
            const dx = client.x - initPos.current.x;
            
            mousePos.current.x += sensitivity * ((dx > 0) ? 1:-1);

            initPos.current.x = client.x;
        }
        else {
            const rect = e.target.getBoundingClientRect();
            const dx = (client.x - rect.x) - rect.width/2;

            mousePos.current.x += dx - mousePos.current.x;
        }

    };

    return (
        <Page currentPage={`home`}>
            <Row className={homeStyles.titleSectionContainer}>
                <span>{mousePos.x}</span>
                <div className={styles.mnemeLogoImage}>
                    <StaticImage src='../images/MNEMElogo.png' />
                    <h1 style={{marginTop:"35px" , fontSize:50, textShadow: '2px 2px var(--primary-bg)'}}>13<span style={{color: 'var(--primary-highlight) !important'}}>.</span>05<span style={{color: 'var(--primary-highlight) !important'}}>.</span>2023</h1>
                </div>
                <div className={homeStyles.flowerImage}>
                    <StaticImage src='../images/flower.png' />
                </div>
                <div className={homeStyles.infoContainer}>
                    <h3>
                        { homeInfo.location }
                    </h3>
                    <h3>
                        { homeInfo.date }
                    </h3>
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
                    <StaticImage style={{ width: '20vw' }} src='../images/MNEMElogo.png' />
                    {documentToReactComponents(JSON.parse(homeInfo.themeInfo.raw))}
                    <StaticImage className={homeStyles.infoImage} src='../images/mneme_with_flowers_2.jpg' />
                </div>
            </Row>
            <Row className={homeStyles.infoSectionContainer}>
                <Row className={homeStyles.infoSectionRow}>
                    <StaticImage src={"../images/placeholder.png"} className={homeStyles.infoSectionImage} alt='Workshops Image' />
                    <h1>
                        <span>6</span>WORKSHOPS
                    </h1>
                </Row>
                <Row className={homeStyles.infoSectionRow}>
                    <h1>
                        <span>9</span>TALKS
                    </h1>
                    <StaticImage src={"../images/placeholder.png"} className={homeStyles.infoSectionImage} alt='Talks Image'/>
                </Row>
                <Row className={homeStyles.infoSectionRow}>
                    <StaticImage src={"../images/placeholder.png"} className={homeStyles.infoSectionImage} alt='Performers Image'/>
                    <h1>
                        <span>4</span>PERFORMERS
                    </h1>
                </Row>
            </Row>
            <Row className={homeStyles.locationRow}>
                <StaticImage className={homeStyles.locationImage} src="../images/Odeon.png" />
                <div className={homeStyles.locationInfoSuperContainer}>
                    <div className={homeStyles.locationInfoContainer}>
                        <h3 className={homeStyles.locationHeader}>{ locationInstructionsHeader }</h3>
                        { documentToReactComponents(JSON.parse(homeInfo.howToGetThere.raw)) }
                    </div>
                </div>
            </Row>
        </Page>
    );
};

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default HomePage;
