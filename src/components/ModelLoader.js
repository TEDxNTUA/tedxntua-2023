import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function ModelLoader ({ url, mousePos }) {
    const [gltf, set] = React.useState();
    const ref = useRef();

    React.useMemo(() => new GLTFLoader().load(url, set), [url])

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y = mousePos.x/300;
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