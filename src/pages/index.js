import * as React from 'react';
import { Row } from 'reactstrap';
import { Canvas } from "react-three-fiber";
import { OrbitControls } from '@react-three/drei';
import { isMobile } from 'react-device-detect';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import GLB from "../components/scene.glb";
import ModelLoader from '../components/ModelLoader';
import { useLocaleContext } from '../contexts/LanguageContext';

import * as styles from "../styles/main.module.css";
import * as homeStyles from "../styles/home.module.css";

const pageTitle = 'Home';

const HomePage = () => {

    const { locale } = useLocaleContext();

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
            const dy = client.y - initPos.current.y;
            
            mousePos.current.x += sensitivity * ((dx > 0) ? 1:-1);

            initPos.current.x = client.x;
            initPos.current.y = client.y;
        }
        else {
            const rect = e.target.getBoundingClientRect();
            const dx = (client.x - rect.x) - rect.width/2;
            const dy = (client.y - rect.y) - rect.height/2;

            mousePos.current.x += dx - mousePos.current.x;
            mousePos.current.y += dy - mousePos.current.y;
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

    const infoData = {
        location: (locale === "el-GR") ? "Ίδρυμα Μιχάλης Κακογιάννης":"Michael Cacoyiannis Foundation",
        date: (locale === "el-GR") ? "21 Μαίου 2021":"21 May 2021",
        bookingUrl: "#",
        bookingText: (locale === "el-GR") ? "ΚΡΑΤΗΣΤΕ ΕΙΣΗΤΗΡΙΟ":"BOOK YOUR TICKET NOW",
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
                    <OrbitControls />
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
                        { infoData.location }
                    </h3>
                    <h3 className={styles.textShadowPrimary}>
                        { infoData.date }
                    </h3>
                    <a href={ infoData.bookingUrl } className={`text-reset text-decoration-none`}>
                        <div className={homeStyles.bookingButton}>
                            { infoData.bookingText }
                        </div>
                    </a>
                </div>
            </Row>
            <Row className={homeStyles.infoSectionContainer}>

            </Row>
        </Page>
    );
};

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default HomePage;