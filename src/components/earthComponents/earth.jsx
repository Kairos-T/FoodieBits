// Wayne
import * as Three from "three";
import { gsap } from "gsap";
import { createLightPillar, createPointMesh, createWaveMesh, getCirclePoints, lon2xyz } from "./utils.jsx";

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
      console.log("Start");
      this.createEarth(); // 创建地球
      this.createStars(); // 添加星星
      this.createEarthGlow(); // 创建地球辉光
      this.createEarthAperture(); // 创建地球的大气层
      await this.createMarkupPoint(); // 创建柱状点位
      // await this.createSpriteLabel(); // 创建标签

      this.show();
      console.log(this); // Check if Earth up
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
      vertexColors: false, //定义材料是否使用顶点颜色，默认false ---如果该选项设置为true，则color属性失效
      size: 0.01 //定义粒子的大小。默认为1.0
    });
    const points = new Three.Points(earthBorder, pointMaterial); //将模型添加到场景
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

    // console.log(this.uniforms);
    console.log(this.earth);
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
    const R = this.options.earth.radius; //地球半径

    // TextureLoader创建一个纹理加载器对象，可以加载图片作为纹理贴图
    const texture = this.options.textures.glow; // 加载纹理贴图

    // 创建精灵材质对象SpriteMaterial
    const spriteMaterial = new Three.SpriteMaterial({
      map: texture, // 设置精灵纹理贴图
      color: 0x4390d1,
      transparent: true, //开启透明
      opacity: 0.7, // 可以通过透明度整体调节光圈
      depthWrite: false //禁止写入深度缓冲区数据
    });

    // 创建表示地球光圈的精灵模型
    const sprite = new Three.Sprite(spriteMaterial);
    sprite.scale.set(R * 3.0, R * 3.0, 1); //适当缩放精灵
    this.earthGroup.add(sprite);
  }

  // Create Earth Aperture
  createEarthAperture() {

    const vertexShader = [
      "varying vec3	vVertexWorldPosition;",
      "varying vec3	vVertexNormal;",
      "varying vec4	vFragColor;",
      "void main(){",
      "	vVertexNormal	= normalize(normalMatrix * normal);", //将法线转换到视图坐标系中
      "	vVertexWorldPosition	= (modelMatrix * vec4(position, 1.0)).xyz;", //将顶点转换到世界坐标系中
      "	// set gl_Position",
      "	gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
      "}"
    ].join("\n");

    //大气层效果
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
        "	vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;", //世界坐标系中从相机位置到顶点位置的距离
        "	vec3 viewCameraToVertex	= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;", //视图坐标系中从相机位置到顶点位置的距离
        "	viewCameraToVertex= normalize(viewCameraToVertex);", //规一化
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

      const radius = this.options.earth.radius;
      const lon = item.region.EW; //经度
      const lat = item.region.NS; //纬度

      this.punctuationMaterial = new Three.MeshBasicMaterial({
        color: new Three.Color(this.options.punctuation.circleColor),
        map: this.options.textures.label,
        transparent: true, //使用背景透明的png贴图，注意开启透明计算
        depthWrite: false //禁止写入深度缓冲区数据
      });

      const mesh = createPointMesh({ radius, lon, lat, material: this.punctuationMaterial }); //光柱底座矩形平面
      this.markupPoint.add(mesh);
      const LightPillar = createLightPillar({
        radius: this.options.earth.radius,
        lon,
        lat,
        index: 0,
        textures: this.options.textures,
        punctuation: this.options.punctuation
      }); //光柱
      LightPillar.name = "LightPillar"
      this.markupPoint.add(LightPillar);
      const WaveMesh = createWaveMesh({ radius, lon, lat, textures: this.options.textures }); //波动光圈
      this.markupPoint.add(WaveMesh);
      this.waveMeshArr.push(WaveMesh);

      await (item.location.map((obj) => {
        const lon = obj.EW; //经度
        const lat = obj.NS; //纬度
        const mesh = createPointMesh({ radius, lon, lat, material: this.punctuationMaterial }); //光柱底座矩形平面
        this.markupPoint.add(mesh);
        const LightPillar = createLightPillar({
          radius: this.options.earth.radius,
          lon,
          lat,
          index: 1,
          textures: this.options.textures,
          punctuation: this.options.punctuation
        }); //光柱
        LightPillar.name = "LightPillar"
        this.markupPoint.add(LightPillar);
        const WaveMesh = createWaveMesh({ radius, lon, lat, textures: this.options.textures }); //波动光圈
        this.markupPoint.add(WaveMesh);
        this.waveMeshArr.push(WaveMesh);
      }));
      console.log(this.markupPoint);
      console.log(this.waveMeshArr);
      this.earthGroup.add(this.markupPoint);
    }));
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
          mesh.material.opacity = (mesh.userData["scale"] - 1) * 2; //2等于1/(1.5-1.0)，保证透明度在0~1之间变
        } else if (mesh.userData["scale"] > 1.5 && mesh.userData["scale"] <= 2) {
          mesh.material.opacity = 1 - (mesh.userData["scale"] - 1.5) * 2; //2等于1/(2.0-1.5) mesh缩放2倍对应0 缩放1.5被对应1
        } else {
          mesh.userData["scale"] = 1;
        }
      });
    }
  }
}