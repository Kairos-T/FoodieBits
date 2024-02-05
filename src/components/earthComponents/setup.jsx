// Wayne

import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Basic {
  constructor(windowSize, color) {
    // Variables to be set
    this.windowSize = windowSize;
    this.color = color;

    this.initScenes()
    this.setControls()
  }

  /**
   * Initialise ThreeJS Scene
   */
  initScenes() {
    // Three.js code to set up your 3D scene
    this.scene = new Three.Scene();
    this.scene.background = new Three.Color(this.color.b)

    // Set up perspective camera
    this.camera = new Three.PerspectiveCamera(45, this.windowSize[0] / this.windowSize[1], 0.1, 100000);
    this.camera.position.set(0, 30, -250)


    this.renderer = new Three.WebGLRenderer({
      alpha: true, // Transparent
      antialias: true, //
    });
    this.renderer.setSize(this.windowSize[0], this.windowSize[1]);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(this.color.b);
  }

  /**
   * Set Orbit Controls
   */
  setControls() {
    // OrbitControls, Camera, Render Dom
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.controls.autoRotateSpeed = 3

    this.controls.enableDamping = true;

    this.controls.dampingFactor = 0.05;

    this.controls.enableZoom = true;

    this.controls.minDistance = 100;

    this.controls.maxDistance = 300;

    this.controls.enablePan = false;
  }
}