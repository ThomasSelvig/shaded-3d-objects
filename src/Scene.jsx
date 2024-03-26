import React from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { CubeCircle } from "./CubeCircle";
import frag from "./assets/shaders/frag.glsl?raw";
import vert from "./assets/shaders/vert.glsl?raw";
import VaporwaveGrid from "./VaporwaveGrid";

export default function Scene() {
  // const shader = useRef();
  // const uniforms = {
  //   u_time: { value: 0 },
  //   u_resolution: { value: [innerWidth, innerHeight] },
  // };
  // useFrame(() => {
  //   uniforms.u_time.value = (Date.now() / 1000) % 100000; // prevent overflow
  //   shader.current.uniforms = uniforms;
  // });

  return (
    <>
      <VaporwaveGrid
        totalWidth={1000}
        totalHeight={1000}
        rows={100}
        cols={100}
      />
      <OrbitControls />
      <PerspectiveCamera makeDefault position={[0, 4, 12]} />
    </>
  );
}
