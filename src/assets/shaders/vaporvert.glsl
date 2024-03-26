varying vec3 vUv; 
uniform float u_time;

void main() {
  vUv = position;

  // vUv.z += sin(u_time + vUv.x * 10.0) * 0.1;
  vUv.z = sin(vUv.x + u_time);
  // vUv.z = sin(vUv.x);
  // vUv.z = sin(u_time);

  vec4 modelPosition = modelMatrix * vec4(vUv, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}