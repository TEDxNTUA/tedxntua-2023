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
    const [mousePos, setMousePos] = React.useState({x: 0, y: 0});
    const updateMousePos = (e) => {
        console.log(1);
        const client = {
            x: isMobile ? e.touches[0].clientX : e.clientX,
            y: isMobile ? e.touches[0].clientY : e.clientY,
        };
        console.log(client);
        const rect = e.target.getBoundingClientRect();
        const x_rel = (client.x - rect.x) - rect.width/2;
        const y_rel = (client.y - rect.y) - rect.height/2;
        setMousePos({x: x_rel, y: y_rel});
    };
    const MouseDetector = () =>
    <div 
    onMouseMove={updateMousePos}
    onTouchMove={(e) => {console.log({x: e.touches[0].clientX, y: e.touches[0].clientY}); setMousePos({x: e.touches[0].clientX, y: e.touches[0].clientY});}}
    className={homeStyles.detectMouseMovement}
    ></div>;

    console.log(mousePos);

    return (
        <Page currentPage={`home`}>
            <Row className={homeStyles.titleSectionContainer}>
                <Canvas className={homeStyles.canvas3d}>
                    <React.Suspense fallback={null}>
                        <CanvasText>
                            MNEME
                        </CanvasText>
                        <ambientLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <ModelLoader url={GLB} mousePos={mousePos} />
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