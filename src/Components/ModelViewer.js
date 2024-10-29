import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Html, useGLTF } from '@react-three/drei';
import gsap from 'gsap';

function Model() {
    const { scene } = useGLTF('https://avneeshrai07.github.io/Hall3D/model.glb');

    return <primitive object={scene} scale={0.5} />;
}

function CameraController({ viewpoints, activeView }) {
    const { camera } = useThree();
    const viewpoint = viewpoints[activeView];

    useEffect(() => {
        if (viewpoint) {
            gsap.to(camera.position, {
                x: viewpoint.position[0],
                y: viewpoint.position[1],
                z: viewpoint.position[2],
                duration: 1.5,
                onUpdate: () => camera.lookAt(...viewpoint.target),
            });
        }
    }, [viewpoint, camera]);

    return null;
}

export default function ModelViewer() {
    const controlsRef = useRef();
    const viewpoints = [
        { position: [-2.5, 1.300, 1.0], target: [0, 0, 0] },
        { position: [-1.5, 2.0, 2.0], target: [0, 0, 0] },
        { position: [0.0, 2.5, -1.3], target: [0, -2, 0] },
        { position: [0.0, 1.8, -2.5], target: [0, 0, 0] },
    ];

    const [activeView, setActiveView] = useState(0);
    
    // Define annotation points with updated coordinates and labels
    const annotations = [
        { position: [0.6, 1.5, -0.5], label: 'Chandelier' },
        { position: [-1.2, 1.0, 1.0], label: 'Portrait' },
        { position: [1.2, 1.2, 1.8], label: 'Fireplace' },
        { position: [-0.3, 1.4, -1.2], label: 'Sofa' },
    ];

    return (
        <>
            <Canvas style={{ height: '100vh', width: '100%' }} camera={{ position: [2.5, -2, 0.7], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <OrbitControls ref={controlsRef} enableZoom={true} />
                <Model />
                <CameraController viewpoints={viewpoints} activeView={activeView} />

                {/* Annotations */}
                {annotations.map((annotation, index) => (
                    <Html position={annotation.position} key={index}>
                        <div
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                pointerEvents: 'none',
                                fontSize: '12px',
                                textAlign: 'center',
                            }}
                        >
                            {annotation.label}
                        </div>
                    </Html>
                ))}
            </Canvas>

            {/* Viewpoint buttons */}
            <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}>
                {viewpoints.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveView(index)}
                        style={{
                            margin: '5px',
                            padding: '10px',
                            backgroundColor: activeView === index ? '#007bff' : '#ccc',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        View {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
}
