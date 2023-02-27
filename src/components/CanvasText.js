import * as React from "react";
import { Text } from "@react-three/drei";
import { isMobile } from "react-device-detect";

const CanvasText = ({ children }) => {
    const scale = [1, 1, 1];
    const shadowColor = "#C51731";
    const textColor = "#F06427";
    const position = [0, 2.3, 0];
    const font = "http://fonts.gstatic.com/s/gfsneohellenic/v7/7HwjPQa7qNiOsnUce2h4448_BwCLZY3eDSV6kppAwI8.ttf";
    const letterSpacing = isMobile ? 0:.8;

    return (
        <>
            <Text
            scale={[1, 1, 1]}
            color={shadowColor}
            anchorX="center"
            anchorY="middle"
            position={[position[0] + .05, position[1] - .05, position[2]]}
            font={font}
            letterSpacing={letterSpacing}
            >
                { children }
            </Text>
            <Text
            scale={[1, 1, 1]}
            color={textColor}
            anchorX="center"
            anchorY="middle"
            position={position}
            font={font}
            letterSpacing={letterSpacing}
            >
                { children }
            </Text>
        </>
    );
}

export default CanvasText;