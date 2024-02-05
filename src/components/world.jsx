// Wayne

import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import Basic from "./earthComponents/setup.jsx";
import Resource from "./earthComponents/resource.jsx";
import Earth from "./earthComponents/earth.jsx";
import { cuisineCoords } from "/src/data/constants";

export default class World {
  constructor(windowSize, color) {
    this.container = document.getElementById("three-container");
    this.color = color;
    // Initialise Scene, Camera, Renderer
    this.basic = new Basic(windowSize, this.color);
    this.scene = this.basic.scene;
    this.camera = this.basic.camera;
    this.renderer = this.basic.renderer;
    this.controls = this.basic.controls;

    this.container.appendChild(this.renderer.domElement);

    this.resources = new Resource(async () => {
      await this.createEarth();
      console.log("Done")
      // Render process
      this.render();
    });
  }

  async createEarth() {
    this.earth = new Earth({
      color: this.color,
      data: cuisineCoords,
      textures: this.resources.textures,
      earth: {
        radius: 50,
        rotateSpeed: 0.002,
        isRotation: true
      },
      punctuation: {
        circleColor: 0x3892ff,
        lightColumn: {
          startColor: 0xe4007f, // 起点颜色
          endColor: 0xffffff, // 终点颜色
        },
      },
    });
    this.scene.add(this.earth.group);
    await this.earth.initEarth();
  }

  /**
   * Render
   */
  render() {
    requestAnimationFrame(this.render.bind(this));
    this.scene.background = new Three.Color(this.color.b);
    this.renderer.render(this.scene, this.camera);
    this.controls && this.controls.update();
    this.earth && this.earth.render();
  }

  updateSize(windowSize) {
    this.renderer.setSize(windowSize[0], windowSize[1]);
    this.camera.aspect = windowSize[0] / windowSize[1];
    this.camera.updateProjectionMatrix();
  }

  updateColor(color) {
    this.color.b = color[0];
    this.color.m = color[1];
    this.scene.background = new Three.Color(this.color.b);
  }
}