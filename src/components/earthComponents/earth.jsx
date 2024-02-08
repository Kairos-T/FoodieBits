// Wayne
import * as Three from "three";
import { gsap } from "gsap";
import { createLightPillar, createPointMesh, createWaveMesh, flyArc } from "./utils.jsx";
import { FontLoader } from "/node_modules/three/examples/jsm/loaders/FontLoader.js";

import Vertex from "/public/shaders/vertex";
import Fragment from "/public/shaders/fragment";

// Export default class
export default class Earth {
  constructor(options) {
    this.options = options;

    this.group = new Three.Group();
    this.group.name = "group";
    this.group.scale.set(0, 0, 0);
    this.earthGroup = new Three.Group();
    this.group.add(this.earthGroup);
    this.earthGroup.name = "EarthGroup";

    // Light Point
    this.markupPoint = new Three.Group();
    this.markupPoint.name = "markupPoint";
    this.waveMeshArr = [];

    this.font = new FontLoader();

    this.isRotation = this.options.earth.isRotation;

    this.timeValue = 100;
    this.uniforms = {
      glowColor: {
        value: new Three.Color(0x0cd1eb)
      },
      scale: {
        type: "f",
        value: -1.0
      },
      bias: {
        type: "f",
        value: 1.0
      },
      power: {
        type: "f",
        value: 3.3
      },
      time: {
        type: "f",
        value: this.timeValue
      },
      isHover: {
        value: false
      },
      map: {
        value: null
      }
    };
  }

  async initEarth() {
    return (async () => {
      this.createEarth();
      this.createStars();
      this.createEarthGlow();
      this.createEarthAperture();
      await this.createMarkupPoint();
      this.createFlyLine();

      this.show();
    })();
  }

  // 1: Create Earth
  createEarth() {
    // Shield
    const earthBorder = new Three.IcosahedronGeometry(this.options.earth.radius + 10, 60, 60);
    const pointMaterial = new Three.PointsMaterial({
      color: this.options.color[1], //Material Color (Changes)
      transparent: true,
      sizeAttenuation: true,
      opacity: 0.1,
      vertexColors: false,
      size: 0.01
    });
    const points = new Three.Points(earthBorder, pointMaterial);
    points.name = "shield";
    this.earthGroup.add(points); // Add Earth Shield

    this.uniforms.map.value = this.options.textures.earth;
    const earthGeometry = new Three.SphereBufferGeometry(this.options.earth.radius, 50, 50);
    const earthMaterial = new Three.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: Vertex.vertexShader,
      fragmentShader: Fragment.fragmentShader
    });
    earthMaterial.needsUpdate = true;
    this.earth = new Three.Mesh(earthGeometry, earthMaterial);
    this.earth.name = "earth";
    this.earthGroup.add(this.earth); // Add Earth Globe
  }

  // 2. Create Stars
  createStars() {

    const vertices = [];
    const colors = [];
    for (let i = 0; i < 500; i++) {
      const vertex = new Three.Vector3();
      vertex.x = 800 * Math.random() - 300;
      vertex.y = 800 * Math.random() - 300;
      vertex.z = 800 * Math.random() - 300;
      vertices.push(vertex.x, vertex.y, vertex.z);
      colors.push(new Three.Color(1, 1, 1));
    }

    // Starry Sky Effect
    this.around = new Three.BufferGeometry();
    this.around.setAttribute("position", new Three.BufferAttribute(new Float32Array(vertices), 3));
    this.around.setAttribute("color", new Three.BufferAttribute(new Float32Array(colors), 3));

    const aroundMaterial = new Three.PointsMaterial({
      size: 2,
      sizeAttenuation: true,
      color: 0x4d76cf,
      transparent: true,
      opacity: 1,
      map: this.options.textures.gradient
    });

    this.aroundPoints = new Three.Points(this.around, aroundMaterial);
    this.aroundPoints.name = "starSky";
    this.aroundPoints.scale.set(1, 1, 1);
    this.group.add(this.aroundPoints);
  }

  // 3. Create Glow
  createEarthGlow() {
    const R = this.options.earth.radius;

    const texture = this.options.textures.glow;

    const spriteMaterial = new Three.SpriteMaterial({
      map: texture,
      color: 0x4390d1,
      transparent: true,
      opacity: 0.7,
      depthWrite: false
    });

    const sprite = new Three.Sprite(spriteMaterial);
    sprite.scale.set(R * 3.0, R * 3.0, 1);
    this.earthGroup.add(sprite);
  }

  // Create Earth Aperture
  createEarthAperture() {

    const vertexShader = [
      "varying vec3	vVertexWorldPosition;",
      "varying vec3	vVertexNormal;",
      "varying vec4	vFragColor;",
      "void main(){",
      "	vVertexNormal	= normalize(normalMatrix * normal);",
      "	vVertexWorldPosition	= (modelMatrix * vec4(position, 1.0)).xyz;",
      "	// set gl_Position",
      "	gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
      "}"
    ].join("\n");

    const AeroSphere = {
      uniforms: {
        coefficient: {
          type: "f",
          value: 1.0
        },
        power: {
          type: "f",
          value: 3
        },
        glowColor: {
          type: "c",
          value: new Three.Color(0x4390d1)
        }
      },
      vertexShader: vertexShader,
      fragmentShader: [
        "uniform vec3	glowColor;",
        "uniform float	coefficient;",
        "uniform float	power;",

        "varying vec3	vVertexNormal;",
        "varying vec3	vVertexWorldPosition;",

        "varying vec4	vFragColor;",

        "void main(){",
        "	vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;",
        "	vec3 viewCameraToVertex	= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;",
        "	viewCameraToVertex= normalize(viewCameraToVertex);",
        "	float intensity	= pow(coefficient + dot(vVertexNormal, viewCameraToVertex), power);",
        "	gl_FragColor = vec4(glowColor, intensity);",
        "}"
      ].join("\n")
    };
    //Globe Glow Atmosphere
    const material1 = new Three.ShaderMaterial({
      uniforms: AeroSphere.uniforms,
      vertexShader: AeroSphere.vertexShader,
      fragmentShader: AeroSphere.fragmentShader,
      blending: Three.NormalBlending,
      transparent: true,
      depthWrite: false
    });
    const sphere = new Three.SphereBufferGeometry(this.options.earth.radius, 50, 50);
    const mesh = new Three.Mesh(sphere, material1);
    this.earthGroup.add(mesh);
  }

  async createMarkupPoint() {

    await (this.options.data.map(async (item) => {

      const name = item.region.name;
      const radius = this.options.earth.radius;
      const lon = item.region.EW;
      const lat = item.region.NS;
      const lightGroup = new Three.Group();

      this.punctuationMaterial = new Three.MeshBasicMaterial({
        color: new Three.Color(this.options.punctuation.circleColor),
        map: this.options.textures.label,
        transparent: true,
        depthWrite: false
      });

      const mesh = createPointMesh({ radius, lon, lat, material: this.punctuationMaterial });
      lightGroup.add(mesh);

      const LightPillar = createLightPillar({
        radius: this.options.earth.radius,
        lon,
        lat,
        index: 0,
        textures: this.options.textures,
        punctuation: this.options.punctuation
      });
      LightPillar.name = name;
      lightGroup.add(LightPillar);

      // Create Ripples
      const WaveMesh = createWaveMesh({ radius, lon, lat, textures: this.options.textures });
      lightGroup.add(WaveMesh);
      this.waveMeshArr.push(WaveMesh);

      lightGroup.name = "LightPillar";
      this.markupPoint.add(lightGroup);

      await (item.location.map((obj) => {
        const lightGroup = new Three.Group();
        const lon = obj.EW;
        const lat = obj.NS;
        const mesh = createPointMesh({ radius, lon, lat, material: this.punctuationMaterial });
        lightGroup.add(mesh);
        const LightPillar = createLightPillar({
          radius: this.options.earth.radius,
          lon,
          lat,
          index: 1,
          textures: this.options.textures,
          punctuation: this.options.punctuation
        });
        LightPillar.name = obj.name;
        lightGroup.add(LightPillar);
        const WaveMesh = createWaveMesh({ radius, lon, lat, textures: this.options.textures });
        lightGroup.add(WaveMesh);
        this.waveMeshArr.push(WaveMesh);
        lightGroup.name = "LightPillar";
        this.markupPoint.add(lightGroup);
      }));
      this.earthGroup.add(this.markupPoint);
    }));
  }

  createFlyLine() {
    this.flyLineArcGroup = new Three.Group();
    this.flyLineArcGroup.userData["flyLineArray"] = [];
    this.earthGroup.add(this.flyLineArcGroup);

    this.options.data.forEach((cities) => {
      cities.location.forEach(item => {

        const arcLine = flyArc(
          this.options.earth.radius,
          cities.region.EW,
          cities.region.NS,
          item.EW,
          item.NS,
          this.options.flyLine
        );

        this.flyLineArcGroup.add(arcLine);
        this.flyLineArcGroup.userData["flyLineArray"].push(arcLine.userData["flyLine"]);
      });

    });

  }

  show() {
    gsap.to(this.group.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 2,
      ease: "Quadratic"
    });
  }

  renderEarth() {
    this.flyLineArcGroup?.userData["flyLineArray"]?.forEach(fly => {
      fly.rotation.z += this.options.flyLine.speed;
      if (fly.rotation.z >= fly.flyEndAngle) fly.rotation.z = 0;
    });

    if (this.isRotation) {
      this.earthGroup.rotation.y += this.options.earth.rotateSpeed;
    }

    this.uniforms.time.value =
      this.uniforms.time.value < -this.timeValue
        ? this.timeValue
        : this.uniforms.time.value - 1;

    if (this.waveMeshArr.length) {
      this.waveMeshArr.forEach((mesh) => {
        mesh.userData["scale"] += 0.007;
        mesh.scale.set(
          mesh.userData["size"] * mesh.userData["scale"],
          mesh.userData["size"] * mesh.userData["scale"],
          mesh.userData["size"] * mesh.userData["scale"]
        );
        if (mesh.userData["scale"] <= 1.5) {
          mesh.material.opacity = (mesh.userData["scale"] - 1) * 2;
        } else if (mesh.userData["scale"] > 1.5 && mesh.userData["scale"] <= 2) {
          mesh.material.opacity = 1 - (mesh.userData["scale"] - 1.5) * 2;
        } else {
          mesh.userData["scale"] = 1;
        }
      });
    }
  }
}