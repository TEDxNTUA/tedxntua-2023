import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { isMobile } from "react-device-detect";

function ModelLoader ({ url, mousePos, rotationSensitivity, active, passiveRotation }) {
    const [gltf, set] = React.useState();
    const ref = useRef();
    const rotation = useRef({rotation: 0});

    const trueSensitivity = rotationSensitivity * 100;

    React.useMemo(() => new GLTFLoader().load(url, set), [url]);

    useFrame(() => {
        if (ref.current) {
                if (!active.active && !isMobile) {
                    ref.current.rotation.y += passiveRotation / trueSensitivity;
                }
                else {
                    ref.current.rotation.y = mousePos.x / trueSensitivity;
                }
        }
    });

    const Model = () => (
        <primitive
        ref={ref}
        object={gltf.scene}
        scale={[2, 2, 2]}
        anchorX="center"
        anchorY="middle"
        position={[0, -2, 1]}
        />
    )

    return gltf ? <Model /> : null;
}

export default ModelLoader;