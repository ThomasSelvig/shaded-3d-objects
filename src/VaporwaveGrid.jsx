import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// function rotateAroundOrigin(obj, angle) {
//   obj.position.x =
//     obj.position.x * Math.cos(angle) - obj.position.y * Math.sin(angle);
//   obj.position.y =
//     obj.position.x * Math.sin(angle) + obj.position.y * Math.cos(angle);
// }
export default function VaporwaveGrid({ totalWidth, totalHeight, rows, cols }) {
  const planeRef = useRef();
  const sinNormalized = (x) => (Math.sin(Math.PI * x - Math.PI / 2) + 1) / 2;

  useFrame(() => {
    const vertices = planeRef.current.geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      // 0, 1, 2 -> 2, 3, 4 -> 4, 5, 6
      const [x, y, z] = [vertices[i], vertices[i + 1], vertices[i + 2]];

      // vertices[i + 1] = Math.sin(y);

      vertices[i + 2] = sinNormalized(Date.now() / 1000 + x);
    }
    planeRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={planeRef} rotation={[Math.PI * -0.5, 0, 0]}>
      <planeGeometry
        args={[totalWidth / rows, totalHeight / cols, rows, cols]}
      />
      <meshBasicMaterial color={65280} wireframe />
    </mesh>
  );
}
