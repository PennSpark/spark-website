"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { MeshPhysicalMaterial, MeshStandardMaterial } from "three";
import { Color } from "three";
import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Shadow } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Model() {
    const { scene } = useGLTF("/models/bulb.glb");
    const [active, setActive] = useState(false);
    const fade = useRef(0);
    const currentColor = useRef(new Color(0, 0, 0));
    const targetColor = useRef(new Color(1.0, 0.45, 0.2));

    useFrame(() => {
        const targetFade = active ? 1 : 0;
        fade.current += (targetFade - fade.current) * 0.1;

        currentColor.current.lerp(targetColor.current, 0.05);

        scene.traverse((child) => {
            if (child.isMesh && child.name === "Wire") {
                const m = child.material;
                m.emissiveIntensity = 10 * fade.current;

                const c = currentColor.current;
                m.color.setRGB(c.r * fade.current, c.g * fade.current, c.b * fade.current);
                m.emissive.setRGB(c.r * fade.current, c.g * fade.current, c.b * fade.current);
            }
        });
    });

    scene.traverse((child) => {
        if (!child.isMesh) return;

        if (child.name === "Glass") {
            child.material = new MeshPhysicalMaterial({
                transparent: true,
                opacity: 0.05,
                roughness: 0.4,
                metalness: 0.5,
                transmission: 1.0,
                ior: 1.45,
                thickness: 0.7,
                attenuationColor: "#ffffff",
                attenuationDistance: 0.1,
                envMapIntensity: 10.0,
            });

            child.material.onBeforeCompile = (shader) => {
                shader.fragmentShader = shader.fragmentShader.replace(
                    "#include <dithering_fragment>",
                    `
                    float fres = 1.0 - dot(normalize(vNormal), normalize(vViewPosition));
                    fres = smoothstep(0.0, 1.0, fres);

                    float step1 = smoothstep(0.0, 0.5, fres);
                    float step2 = step(0.85, fres);

                    vec3 toonEdge = vec3(step1 * 0.6 + step2 * 1.0);

                    gl_FragColor.rgb = mix(gl_FragColor.rgb, toonEdge, 0.8);

                    #include <dithering_fragment>
                    `
                );
            };
            child.material.needsUpdate = true;
        }

        if (child.name === "Base") {
            child.material = new MeshStandardMaterial({
                color: "#2c2c2c",
                metalness: 0.2,
                roughness: 0.8,
            });
        }

        if (child.isMesh && child.name === "Wire") {
            child.material = new MeshStandardMaterial({
                emissive: "#000000",
                emissiveIntensity: 0,
                color: "#000000",
                roughness: 1.0,
            });
        }
    });

    return (
        <group onClick={() => setActive(!active)} scale={1}>
            <group rotation={[0.1, 0.0, 0.3]}>
                <primitive object={scene} scale={1} />
            </group>
        </group>
    );
}


useGLTF.preload("/models/bulb.glb");

export default function ThreeJSSection() {
    return (
        <div className="absolute inset-0 pointer-events-none flex justify-end pr-8">
            <div className="w-full md:w-[70%] h-full select-none">
                <Canvas
                    camera={{ position: [0, -1.25, -6.5], fov: 50 }}
                    style={{ background: "transparent" }}
                >
                    <Environment preset="city" blur={1.0} environmentIntensity={2.5} />
                    <Shadow
                        position={[0, -1.6, 0]}
                        scale={2.75}
                        opacity={0.25}
                        color="black"
                        fog={false}
                    />
                    <Model />
                    <EffectComposer>
                        <Bloom
                            intensity={2.0}
                            luminanceThreshold={0.1}
                            luminanceSmoothing={0.9}
                            mipmapBlur
                        />
                    </EffectComposer>
                    <OrbitControls
                        enableDamping
                        autoRotate
                        autoRotateSpeed={1.0}
                        enablePan={false}
                        enableZoom={false}
                    />
                </Canvas>
            </div>
        </div>
    );
}