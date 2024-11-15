import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber"
import { useAnimations, useGLTF, useScroll, ScrollControls } from "@react-three/drei"
import { Group, Mesh } from "three"
import CanvasLoader from "../Loader";

useGLTF.preload("./robot/robot_playground.glb")

const Robot = () => {
  const group = useRef<Group>(null)
  const { nodes, materials, animations, scene } = useGLTF(
    "./robot/robot_playground.glb"
  )
  const { actions, clips } = useAnimations(animations, scene)
  const scroll = useScroll()

  useEffect(() => {
    if (actions["Experiment"]) {
      //@ts-ignore
      actions["Experiment"].play().paused = true;
    }

    return () => {
      if (group.current) {
        group.current.traverse((child) => {
          if (child instanceof Mesh) {
            child.geometry.dispose();
            if (child.material) {
              child.material.dispose();
            }
          }
        });
      }
    };
  }, [actions]);

  useFrame(
    () =>
      //@ts-ignore
      (actions["Experiment"].time =
        //@ts-ignore
        (actions["Experiment"].getClip().duration * scroll.offset) / 4)
  )

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  )
};

const RobotCanvas = () => {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<CanvasLoader />}>
        <ScrollControls damping={0.5} pages={3}>
          <Robot />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
};

export default RobotCanvas;