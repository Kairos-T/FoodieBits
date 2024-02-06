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
    this.mouse = new Three.Vector2(0, 0);
    this.pointer = new Three.Raycaster();
    this.delay = 200;
    this.recentTime = performance.now();

    this.container.appendChild(this.renderer.domElement);

    this.resources = new Resource(async () => {
      await this.createEarth();
      console.log("Done");
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
          endColor: 0xffffff // 终点颜色
        }
      }
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
    if (this.earth) {
      const shieldPoint = this.earth.earthGroup.getChildByName("shield");
      shieldPoint.material.color = new Three.Color(this.color.m);
    }
  }

  async mouseDownCheck() {
    // Check current time
    const currentTime = performance.now();
    if (currentTime - this.recentTime < this.delay) {
      return currentTime;
    }
    this.recentTime = currentTime;
    return currentTime;
  }

  async mouseUpCheck(windowSize, useRaycast, timeDown) {
    // Get current time mouse released
    const timeUp = performance.now();
    if (timeUp - timeDown > 0.5) {
      return;
    }

    // Get mouse position in screen space
    const rect = document.getElementById("three-container").getBoundingClientRect();
    console.log(3, this.mouse);
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    !isNaN(mouseX) && !isNaN(mouseY)
      ? this.mouse = new Three.Vector2(mouseX, mouseY)
      : useRaycast = false;
    console.log(2, this.mouse);

    // Only raycast if not panning (optimization)
    if (useRaycast) {
      this.pointer.setFromCamera(this.mouse, this.camera);
      // Raycast to single object
      const light = this.earth.earthGroup.getObjectByName("markupPoint");
      console.log(1);
      console.log(light);
      const hits = this.pointer.intersectObject(light.getObjectByName("LightPillar"), false);
      // Run if we have intersections
      if (hits.length > 0) {
        hits.forEach(hit => {
          // Hit
          this.intersect = true;
          console.log("hit");
        });
      } else {
        this.intersect = false;
      }
    }
    return this.intersect;
  }

  async positionLock(windowSize) {
    this.container.addEventListener("mousedown", this.mouseDownCheck(windowSize, true));
    this.container.addEventListener("mouseup", this.mouseUpCheck);
    const timeDown = await this.mouseDownCheck();
    const interStatus = await this.mouseUpCheck(windowSize, true, timeDown);
    if (interStatus)
    {
        this.mouse.unproject(this.camera)
    }
    return () => {
      this.container.removeEventListener("mouseup", this.mouseDownCheck);
      this.container.removeEventListener("mousedown", this.mouseUpCheck);
    };
  }
}