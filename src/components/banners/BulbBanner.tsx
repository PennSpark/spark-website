import { useEffect, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Shadow } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// disable orbit controls on mobile
function useIsCoarsePointer() {
  const [coarse, setCoarse] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setCoarse(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return coarse;
}

function Model() {
  const base = import.meta.env.BASE_URL;
  const { scene } = useGLTF(`${base}models/bulb.glb`) as unknown as { scene: THREE.Group };

  const [active, setActive] = useState(false);
  const fade = useRef(0);
  const currentColor = useRef(new THREE.Color(0, 0, 0));
  const targetColor = useRef(new THREE.Color(1.0, 0.45, 0.2));

  useEffect(() => {
    scene.traverse((obj) => {
      const child = obj as THREE.Object3D & { isMesh?: boolean; material?: THREE.Material; name: string };
      if (!child.isMesh) return;

      if (child.name === "Glass") {
        const mat = new THREE.MeshPhysicalMaterial({
          transparent: true,
          opacity: 0.05,
          roughness: 0.4,
          metalness: 0.5,
          transmission: 1.0,
          ior: 1.45,
          thickness: 0.7,
          attenuationColor: new THREE.Color("#ffffff"),
          attenuationDistance: 0.1,
          envMapIntensity: 10.0,
        });

        mat.onBeforeCompile = (shader) => {
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

        child.material = mat;
      }

      if (child.name === "Base") {
        child.material = new THREE.MeshStandardMaterial({
          color: "#2c2c2c",
          metalness: 0.2,
          roughness: 0.8,
        });
      }

      if (child.name === "Wire") {
        child.material = new THREE.MeshStandardMaterial({
          emissive: new THREE.Color("#000000"),
          emissiveIntensity: 0,
          color: new THREE.Color("#000000"),
          roughness: 1.0,
        });
      }
    });
  }, [scene]);

  // animate emissive on Wire
  useFrame(() => {
    const target = active ? 1 : 0;
    fade.current += (target - fade.current) * 0.1;

    currentColor.current.lerp(targetColor.current, 0.05);

    scene.traverse((obj) => {
      const child = obj as THREE.Mesh;
      if (!child.isMesh || child.name !== "Wire") return;

      const mat = child.material as THREE.MeshStandardMaterial;
      const c = currentColor.current;

      const f = THREE.MathUtils.smootherstep(fade.current, 0, 1);
      mat.emissiveIntensity = 2 * f;
      
      mat.color.setRGB(c.r * fade.current, c.g * fade.current, c.b * fade.current);
      mat.emissive.setRGB(c.r * fade.current, c.g * fade.current, c.b * fade.current);
    });
  });

  return (
    <group onClick={() => setActive((v) => !v)}>
      <group rotation={[0.1, 0.0, 0.3]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/bulb.glb`);

type BulbBannerProps = {
  children?: ReactNode;
  className?: string;
};

export default function BulbBanner({ children, className = "" }: BulbBannerProps) {
  const isMobile = useIsCoarsePointer();

  return (
    <section className={`relative flex flex-col px-8 md:px-32 lg:px-42 w-full h-[100svh] items-start justify-center ${className}`}>
      {children}

      <div className="absolute inset-0 pointer-events-none flex justify-end">
        <div className="w-full md:w-[70%] h-full select-none">
          <Canvas camera={{ position: [0, -1.25, -6.5], fov: 50 }} style={{ background: "transparent", touchAction: "pan-y", }}>
            <Environment preset="city" blur={1.0} environmentIntensity={2.5} />
            <Shadow position={[0, -1.6, 0]} scale={2.75} opacity={0.25} color="black" fog={false} />
            <Model />
            <EffectComposer>
              <Bloom intensity={2.0} luminanceThreshold={0.1} luminanceSmoothing={0.9} mipmapBlur />
            </EffectComposer>
              {!isMobile && (
                <OrbitControls
                  enableDamping
                  autoRotate
                  autoRotateSpeed={1.0}
                  enablePan={false}
                  enableZoom={false}
                />
              )}
          </Canvas>
        </div>
      </div>
    </section>
  );
}
