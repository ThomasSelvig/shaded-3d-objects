import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Cube({ position }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      {/* <circleGeometry args={[1, 32]} /> */}
      <meshBasicMaterial wireframe={false} color={"red"} />
    </mesh>
  );
}

// a func spawning 8 circles rotating around the origin
export function CubeCircle({ radius }) {
  const cubeContainer = useRef();

  useFrame(() => {
    cubeContainer.current.rotation.z -= 0.01;
  });

  const cubes = [];
  for (let i = 0; i < 8; i++) {
    const angle = (Math.PI / 4) * i;
    cubes.push(
      <Cube
        key={i}
        position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
      />
    );
  }

  return <group ref={cubeContainer}>{cubes}</group>;
}
