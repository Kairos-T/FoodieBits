// Wayne

import { useRef } from 'react';

export default class Vertex {
  ref = useRef();

  // Define the vertex shader code
  vertexShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vp;
    varying vec3 vPositionNormal;

    void main(void) {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vp = position;
      vPositionNormal = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
};