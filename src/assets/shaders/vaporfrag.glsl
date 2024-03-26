varying vec3 vUv;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
  // clip space
  vec2 space = vUv.xy / u_resolution.xy * 2.0;// - 1.0;
  // adjust for aspect ratio ([-1, 1] but with "black bars")
  space.x *= u_resolution.x / u_resolution.y;

  vec2 center = vec2(0.0, 0.0);
  // vec3 color = vec3(0., vUv.x, vUv.y);
  vec3 color = vec3(0.);
  
  // draw circle in the center of adjusted space
  if (length(space - center) < 0.5) {
    color = vec3(1.0);
  }

  gl_FragColor = vec4(color, 1.0);
}