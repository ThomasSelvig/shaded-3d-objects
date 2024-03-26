import React from "react";
import { Canvas } from "@react-three/fiber";

import Scene from "./Scene";

function App() {
  return (
    <Canvas style={{ height: "100vh" }}>
      <Scene />
    </Canvas>
  );
}

export default App;