import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import frag from "./assets/shaders/vaporfrag.glsl?raw";
import vert from "./assets/shaders/vaporvert.glsl?raw";

export function VaporwaveGridShaded({ totalWidth, totalHeight, rows, cols }) {
  const shader = useRef();
  const uniforms = {
    u_width: { value: totalWidth },
    u_height: { value: totalHeight },
    u_time: { value: 0 },
    u_resolution: { value: [totalWidth / rows, totalHeight / cols] },
  };
  useFrame(() => {
    uniforms.u_time.value = (Date.now() / 1000) % 100000; // prevent overflow
    shader.current.uniforms = uniforms;
  });

  return (
    // <mesh>
    <mesh rotation={[Math.PI * -0.5, 0, 0]}>
      <planeGeometry
        args={[totalWidth / rows, totalHeight / cols, rows, cols]}
      />
      <shaderMaterial
        fragmentShader={frag}
        vertexShader={vert}
        uniforms={uniforms}
        ref={shader}
        // wireframe
        // inactive
      />
      {/* <meshBasicMaterial color={65280} wireframe /> */}
    </mesh>
  );
}
