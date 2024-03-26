import React from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import { VaporwaveGridShaded } from "./VaporwaveGridShaded";

export default function Scene() {
  return (
    <>
      <VaporwaveGridShaded
        totalWidth={1000}
        totalHeight={1000}
        rows={100}
        cols={100}
      />
      <PerspectiveCamera makeDefault position={[0, 4, 12]} />
      <OrbitControls />
    </>
  );
}
