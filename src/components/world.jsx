// Wayne

import * as Three from "three";

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

    // Clickable Pointers
    this.mouse = new Three.Vector2();
    this.pointer = new Three.Raycaster();
    this.delay = 200;
    this.recentTime = performance.now();

    this.container.appendChild(this.renderer.domElement);

    this.resources = new Resource(async() => {
      await this.createEarth();
      console.log("Done")
      this.renderWorld();
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
  renderWorld() {
    this.scene.background = new Three.Color(this.color.b);
    this.controls && this.controls.update();
    this.earth && this.earth.renderEarth();
    this.renderer.render(this.scene, this.camera);
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
    if (this.earth){
      const shieldPoint = this.earth.earthGroup.getChildByName("shield")
      shieldPoint.material.color = new Three.Color(this.color.m);
    }
  }

  positionLock(windowSize, useRaycast) {
    const currentTime = performance.now();
    if (currentTime - this.recentTime < this.delay) {
      return;
    }
    this.recentTime = currentTime;

    // Get mouse position in screen space
    this.mouse.x = (event.clientX / windowSize[0]) * 2 - 1;
    this.mouse.y = -(event.clientY / windowSize[1]) * 2 + 1;
    // Only raycast if not panning (optimization)
    if (useRaycast) {
      this.pointer.setFromCamera(this.mouse, this.camera);

      // Raycast to single object
      const hits = this.pointer.intersectObject(this.scene.earthGroup.getObjectByName(""), false);

      // Run if we have intersections
      if (hits.length > 0) {
        hits.forEach(hit => {
          // Change material color of item we clicked on
          hit.object.material.color.set(0xff0000);
        });
      }
    }
  }
}