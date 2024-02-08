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
    this.interStatus = false;
    this.timeDown = performance.now()

    this.container.appendChild(this.renderer.domElement);

    this.resources = new Resource(async () => {
      await this.createEarth();
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
      },
      flyLine: {
        color: 0xf3ae76, // 飞线的颜色
        flyLineColor: 0xff7714, // 飞行线的颜色
        speed: 0.004, // 拖尾飞线的速度
      },
    });
    this.scene.add(this.earth.group);
    await this.earth.initEarth();
    this.container.addEventListener("click", (event)=> this.mouseClickCheck(event), false);
    this.container.addEventListener("mousedown", () => this.earth.isRotation = false)
    this.container.addEventListener("mouseup", () => this.earth.isRotation = true)
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
      const shieldPoint = this.earth.earthGroup.getObjectByName("shield");
      shieldPoint.material.color = new Three.Color(this.color.m);
    }
  }

  mouseClickCheck(event) {
    // Get current time mouse released
    const timeUp = performance.now();
    if (timeUp - this.timeDown < 500) {
      return;
    }
    this.timeDown = timeUp;

    // Get mouse position in screen space
    const rect = document.getElementById("three-container").getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    if (!isNaN(mouseX) && !isNaN(mouseY)) {
      this.mouse = new Three.Vector2(mouseX, mouseY);
      this.interStatus = true;
    } else {
      this.interStatus = false;
    }
  }
}