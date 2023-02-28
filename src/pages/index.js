import * as React from 'react';
import { Row } from 'reactstrap';
import { Canvas } from "react-three-fiber";
import { OrbitControls } from '@react-three/drei';

import Page from '../components/Page';
import PageHead from '../components/PageHead';
import GLB from "../components/scene.glb";
import ModelLoader from '../components/ModelLoader';
import CanvasText from "../components/CanvasText";
import { isMobile } from 'react-device-detect';
import Loading from '../components/Loading';

import * as styles from "../styles/main.module.css";
import * as homeStyles from "../styles/home.module.css";

const pageTitle = 'Home';

const HomePage = () => {

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
                        {/* <CanvasText>
                            MNEME
                        </CanvasText> */}
                        <ambientLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                    <React.Suspense fallback={<Loading />}>
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
            </Row>
        </Page>
    );
};

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default HomePage;