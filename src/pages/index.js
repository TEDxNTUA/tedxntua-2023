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
    const locationInstructionsHeader = (locale === 'el-GR' ? 'Πώς να έρθεις εδώ':'How to get here');

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

    const MouseDetector = () => {
        return (
            <div 
            onMouseMove={(e) => {active.current.active = true; updateMousePos(e);}}
            onMouseLeave={() => active.current.active = false}
            onTouchMove={(e) => {active.current.active = true; updateMousePos(e);}}
            onTouchCancel={() => {active.current.active = false;}}
            onTouchEnd={() => {active.current.active = false;}}
            className={homeStyles.detectMouseMovement}
            ></div>
        );
    };

    return (
        <Page currentPage={`home`}>
            <Row className={homeStyles.titleSectionContainer}>
                <span>{mousePos.x}</span>
                    <Canvas className={homeStyles.canvas3d}>
                            <ambientLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <React.Suspense fallback={null}>
                            <ModelLoader
                            url={GLB}
                            mousePos={mousePos.current}
                            rotationSensitivity={isMobile ? 1:10}
                            active={active.current}
                            passiveRotation={isMobile ? 1:5}
                            />
                        </React.Suspense>
                    </Canvas>
                <MouseDetector />
                <h1 className={`${homeStyles.mnemeLabel}`}>
                    <span>M</span>
                    <span>N</span>
                    <span>E</span>
                    <span>M</span>
                    <span>E</span>
                </h1>
                <div className={homeStyles.infoContainer}>
                    <h3 className={styles.textShadowPrimary}>
                        { homeInfo.location }
                    </h3>
                    <h3 className={styles.textShadowPrimary}>
                        { homeInfo.date }
                    </h3>
                    <a href={ homeInfo.ticketUrl } className={`text-reset text-decoration-none`}>
                        <div className={homeStyles.bookingButton}>
                            { (locale === 'el-GR') ? 'ΚΡΑΤΗΣΤΕ ΕΙΣΙΤΗΡΙΟ':'BOOK YOUR TICKET NOW' }
                        </div>
                    </a>
                </div>
            </Row>
            <Row className={homeStyles.themeInfoRow}>
                <div className={homeStyles.themeInfoContainer}>
                    <div className={homeStyles.themeInfoBackground}></div>
                    <div className={homeStyles.themeInfoBackground}></div>
                    <div className={homeStyles.themeInfoBackground}></div>
                    {documentToReactComponents(JSON.parse(homeInfo.themeInfo.raw))}
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
            <Row>
                <div className={homeStyles.locationInfoContainer}>
                    <GatsbyImage image={locationImage} className={homeStyles.locationImage} alt={ homeInfo.location }/>
                    <div dangerouslySetInnerHTML={{__html: mapsHtml }} />
                </div>
                <div className={homeStyles.locationInstructions}>
                    <h1 className={styles.textShadowPrimary}>{ locationInstructionsHeader }</h1>
                    <hr />
                    { documentToReactComponents(JSON.parse(homeInfo.howToGetThere.raw)) }
                </div>
            </Row>
        </Page>
    );
};

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default HomePage;