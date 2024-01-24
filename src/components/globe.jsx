// Wayne
import { useState, useEffect } from "react";
import * as Three from "three";
import { gsap } from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { entries, latlng } from "../data/constants";

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const latLngToVector = ({ lat, lng, radius, height }) => {
  const phi = lat * Math.PI / 180;
  const theta = (lng - 180) * Math.PI / 180;
  const x = -(radius + height) * Math.cos(phi) * Math.cos(theta);
  const y = (radius + height) * Math.sin(phi);
  const z = (radius + height) * Math.cos(phi) * Math.sin(theta);
  return { x, y, z };
};

// Initialise Globe Scene for ThreeJS

// Export default
const ThreeGlobeScene = (windowSize, color) => {
  const cleanUp = (globe) => {
    if (globe) {
      console.log(`Before ${globe.globeContainer.childNodes.length}`);
      if (globe.globeContainer.childNodes.length > 0) {
        globe.globeContainer.removeChild(globe.renderer.domElement);
      }
      console.log(`After ${globe.globeContainer.childNodes.length}`);
    }
  };

  const [globe, setGlobe] = useState(null);

  useEffect(() => {
    const initGlobeScene = () => {
      console.log("Start Init");
      // Three.js code to set up your 3D scene
      const sphere = new SphereGlobe(windowSize, 8, color[0], color[1]).initSphere();
      setGlobe(sphere);
    };
    initGlobeScene();
    return () => {
      cleanUp(globe);
    };
  }, []);

  useEffect(() => {
    // Three.js code to set up your 3D scene
    if (globe) {
      globe.updateSize(windowSize);
      console.log(`Globe.jsx: ${windowSize}`);
      // Already rendered in
      // globe.globeContainer.appendChild(globe.renderer.domElement);
      // return () => { if (globe.globeContainer.childNodes.length > 0) { globe.globeContainer.removeChild(globe.renderer.domElement); } };
    }
  }, [windowSize]);

  useEffect(() => {
    if (globe) {
      globe.updateColor(color);
      console.log(`Globe.jsx: ${color}`);
      // Already rendered in
      // globe.globeContainer.appendChild(globe.renderer.domElement);
      // return () => { if (globe.globeContainer.childNodes.length > 0) { globe.globeContainer.removeChild(globe.renderer.domElement); } };
    }
  }, [color]);

  useEffect(() => {
    // Animation Loop
    const renderGlobeScene = () => {
      if (globe) {
        globe.render(1);
        window.globe = globe;  // Assign to window for debugging
      }
      requestAnimationFrame(renderGlobeScene);
    };
    renderGlobeScene();
    // Clean up Three.js resources when component unmounts
    return () => {
      cleanUp(globe);
    };
  }, [globe]);

  return {};
};
export default ThreeGlobeScene;

class SphereGlobe {
  constructor(windowSize, radius, bColor, mColor) {
    // Variables to be set
    this.radius = radius;
    this.size = radius * 0.04;
    this.color = { b: bColor, m: mColor };

    // Three.js code to set up your 3D scene
    this.scene = new Three.Scene();

    // Set up perspective camera
    this.camera = new Three.PerspectiveCamera(45, windowSize[0] / windowSize[1], 0.1, radius * 100);
    // this.mouse = new Three.Vector2();
    // this.camera.position.z = radius * 2.5;
    // this.camera.rotation.z *= 0.2;

    // Set up renderer
    this.renderer = new Three.WebGLRenderer({ antialiasing: true });
    this.renderer.setSize(windowSize[0], windowSize[1]);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(this.color.b); // Set the clear color to background color

    this.globeContainer = document.getElementById("three-container");
    this.group = new Three.Group();
    // this.clock = new Three.Clock(false);
    this.shouldRotate = true;

    // Create Data Points for Sphere
    // this.cubeGeometry = new Three.BoxGeometry(1, 1, 10);
    this.center = new Three.Vector3(0, 0, 0);
  }

  initSphere() {
    // Append the renderer's DOM element to the component's container
    this.globeContainer.appendChild(this.renderer.domElement);
    console.log(this.color.b);
    console.log("where");
    this.scene.background = new Three.Color(this.color.b);

    this.renderSphere();
    // this.renderDataPoints();
    // this.setupLights();
    // this.bindEvents();

    this.camera.position.set(0, 0, 28);
    this.camera.lookAt(this.center);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.update();
    console.log(this.scene);
    return this;
  }


  // .init Function 1 Render sphere
  renderSphere = () => {
    // // Create Sphere and Add sphere to group
    // this.meshMaterial = new Three.MeshBasicMaterial({ color: new Three.Color(this.color.m) });
    this.pointMaterial = new Three.PointsMaterial({ color: new Three.Color(this.color.m), size: 0.2 });
    this.sphereGeometry = new Three.SphereGeometry(this.radius, 64, 64);

    // this.globe = new Three.Mesh(this.sphereGeometry, this.meshMaterial);
    this.globe = new Three.Points(this.sphereGeometry, this.pointMaterial);
    console.log(this.globe.material);
    this.globe.name = "earth";
    this.group.add(this.globe);
  };
  /*
  // .init Function 2 Render data points
  renderDataPoints = () => {
    this.points = this.getDistribution(200).map(({ x, y, z }, index) => {
      const { color, height } = entries[rand(0, 3)];
      const material = new Three.MeshPhongMaterial({
        color: color,
        opacity: 1,
        transparent: true,
        emissive: color,
        emissiveIntensity: 0
      });

      const cube = new Three.Mesh(this.cubeGeometry, material);

      cube.castShadow = true;
      cube.receiveShadow = true;

      cube.position.set(x * this.radius, y * this.radius, z * this.radius);

      cube.material.color.setHex(color);
      cube.lookAt(this.center);
      cube.scale.y = this.size;
      cube.scale.x = this.size;
      cube.scale.z += height * rand(0.5, 8);

      cube.__animating = false;
      cube.__id = index;
      cube.__update = height;
      cube.__default = 1;

      // this.group.add(cube);

      return cube;
    });
  };
  getDistribution = (n) => {
    const rnd = 1;
    const offset = 2 / n;
    const increment = Math.PI * (3 - Math.sqrt(5));

    return Array(n)
      .fill(null)
      .map((_, i) => {
        const y = i * offset - 1 + offset / 2;
        const r = Math.sqrt(1 - Math.pow(y, 2));
        const phi = ((i + rnd) % n) * increment;

        return {
          x: Math.cos(phi) * r,
          z: Math.sin(phi) * r,
          y
        };
      });
  };
  */

  // .init Function 3 Add lights
  setupLights() {
    // Add PointLight
    const pointLight = new Three.PointLight(0xffffff, 5, 60);
    pointLight.position.set(50, 50, 76);
    this.lightHolder = new Three.Group();
    this.lightHolder.add(pointLight);
    this.scene.add(this.lightHolder);

    // Add Spotlight
    this.light = new Three.SpotLight(0xffffff);
    this.light.castShadow = true;
    this.light.shadow.mapSize.width = 50;
    this.light.shadow.mapSize.height = 50;
    this.light.shadow.camera.near = 500;
    this.light.shadow.camera.far = 3000;
    this.light.shadow.camera.fov = 75;
    this.scene.add(this.light);
  }

  /*
  // .init Function 4 Bind handleEvents to make it reactive
  bindEvents() {
    this.globeContainer.addEventListener("mouseenter", this.onHover);
    this.globeContainer.addEventListener("mouseout", this.onExit);
  }

  // 4A Mouse enter
  onHover = () => {
    console.log("Over");
    this.addLocalPoint(latlng);
  };
  // Add Data Point
  addLocalPoint = (latlng) => {
    const total = latlng.length;
    const totalPoints = this.points.length;

    const points = this.points.slice(0, total);

    // // log(points)
    this.hidePoints(this.points.slice(total, totalPoints));

    this.latLngCords = latlng.map(([lat, lng]) => {
      const { x, y, z } = latLngToVector({ lat, lng, radius: this.radius, height: 0 });
      return { x, y, z };
    });
    this.local = points.map((point, index) => {
      const { x, y, z } = this.latLngCords[index];
      gsap.to(point.position, 5.5, {
        x, y, z,
        onUpdate: () => {
          point.lookAt(this.center);
        }
      });
      gsap.to(point.scale, 5.5, {
        x: this.size * 0.1,
        y: this.size * 0.1,
        z: 10,
        onUpdate: () => {
          point.lookAt(this.center);
        }
      });
    });
    const { x, y, z } = this.latLngCords[0];
    this.moveCamera({ x, y, z });
  };
  hidePoints = points => {
    points.forEach(point => {
      gsap.to(point.scale, 1, {
        z: 1
      });
      gsap.to(point.material, 1, {
        opacity: 0
      });
    });
  };
  // Move Camera to position
  moveCamera = ({ x, y, z }) => {
    const { x: cx, y: cy, z: cz } = this.camera.position;
    const start = new Three.Vector3(cx, cy, cz);

    // Move camera to the target defined earlier
    const point = { x, y, z };

    const camDistance = this.camera.position.length();
    this.camera.position
      .copy(new Three.Vector3(point.x, point.y, point.z))
      .normalize()
      .multiplyScalar(camDistance);

    // Save the camera position
    const { x: a, y: b, z: c } = this.camera.position;

    // Invert back to original position
    this.camera.position
      .copy(start)
      .normalize()
      .multiplyScalar(camDistance);

    // Animate from start to end
    const t1 = new gsap.timeline();
    const zoom = {
      value: this.camera.zoom
    };
    t1
      .to(this.camera.position, 8, {
        x: a, y: b, z: c,
        onUpdate: () => {
          this.controls.update();
        }
      })
      .to(zoom, 3, {
          value: 5,
          onUpdate: () => {
            this.camera.zoom = zoom.value;
            this.camera.updateProjectionMatrix();
            this.controls.update();
          }
        }, "-=2.5"
      );
  };
  // 4B Mouse exit
  onExit = () => {
    console.log("Exit");
  };
  */

  // 5 Render Scene
  render = (timestamp) => {
    if (this.shouldRotate) {
      if (!this.start) this.start = timestamp;
      const progress = timestamp - this.start;
      this.group.rotation.x = 1;
      this.group.rotation.y = progress * 0.00005;
      this.group.rotation.z = progress * 0.000025;
    }

    // this.lightHolder.quaternion.copy(this.camera.quaternion);
    // this.light.position.copy(this.camera.position);
    // console.log("Rendering...");
    this.scene.add(this.globe);
    this.renderer.setClearColor(this.color.b); // Set the clear color to background color
    this.renderer.render(this.scene, this.camera);
  };

  // 6 Clean Up Dom Element
  cleanUp = () => {
    if (this.globeContainer && this.renderer.domElement) {
      this.globeContainer.removeChild(this.renderer.domElement);
    }
  };

  // 7 Receive Updates
  updateSize(windowSize) {
    if (this.renderer) {
      this.renderer.setSize(windowSize[0], windowSize[1]);
      this.camera.aspect = windowSize[0] / windowSize[1];
      this.camera.updateProjectionMatrix();
    }
  }

  updateColor(color) {
    if (this.scene && this.globe) {
      this.scene.background = new Three.Color(color[0]);
      this.globe.material.color.set(color[1]);
    }
  }
}

/*
  useEffect(() => {
    // Three.js code to set up your 3D scene
    const camera = new Three.PerspectiveCamera(45, windowSize[0] / windowSize[1], 0.1, 100);
    camera.position.set(0, 0, 100);

    const scene = new Three.Scene();
    scene.background = new Three.Color(color[0]);

    const geometry = new Three.SphereGeometry(8, 64, 64);
    const material = new Three.MeshBasicMaterial({ color: color[1] });
    const mesh = new Three.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new Three.WebGLRenderer({ antialias: true });
    renderer.setSize(windowSize[0], windowSize[1]);

    const container = document.getElementById("three-container");
    container.appendChild(renderer.domElement);

    // Animation
    let t = 1
    const animate = (time) => {
      // Update Three.js scene here
      mesh.rotation.x = time/1000;
      mesh.rotation.y = time/1000;
      mesh.rotation.z = time/2000;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
      time++
    };
    animate(t);

    // Clean up Three.js resources when component unmounts
    return () => {
      container.removeChild(renderer.domElement);
    };
  })
*/
