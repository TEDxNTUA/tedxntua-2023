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

import * as styles from "../styles/main.module.css";
import * as homeStyles from "../styles/home.module.css";

const pageTitle = 'Home';

const HomePage = () => {
    // store mouse position as ref instead of state to prevent
    // re-rendering which stops touch detection and leads to
    // improper "ontouchmove" behaviour
    const mousePos = React.useRef({x: 0, y: 0});

    const updateMousePos = (e) => {

        if (!e.touches) return;

        const client = {
            x: isMobile ? e.touches[0].clientX : e.clientX,
            y: isMobile ? e.touches[0].clientY : e.clientY,
        };

        const rect = e.target.getBoundingClientRect();
        const x_rel = (client.x - rect.x) - rect.width/2;
        const y_rel = (client.y - rect.y) - rect.height/2;
        mousePos.current.x += x_rel - mousePos.current.x;
        mousePos.current.y += y_rel - mousePos.current.y;
    };

    const MouseDetector = () => {
        console.log("re-rendered!");
        return (
            <div 
            onMouseMove={updateMousePos}
            onTouchMove={updateMousePos}
            className={homeStyles.detectMouseMovement}
            ></div>
        );
    };

    console.log(mousePos.current);

    return (
        <Page currentPage={`home`}>
            <Row className={homeStyles.titleSectionContainer}>
                <span>{mousePos.x}</span>
                <Canvas className={homeStyles.canvas3d}>
                    <React.Suspense fallback={null}>
                        <CanvasText>
                            MNEME
                        </CanvasText>
                        <ambientLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <ModelLoader url={GLB} mousePos={mousePos.current}  />
                    </React.Suspense>
                    <OrbitControls />
                </Canvas>
                <MouseDetector />
            </Row>
        </Page>
    );
};

export const Head = () => <PageHead pageTitle={ pageTitle } />

export default HomePage;