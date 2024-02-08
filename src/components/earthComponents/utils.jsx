import * as Three from "three";

export const lon2xyz = (R, longitude, latitude) => {
  let lon = longitude * Math.PI / 180; // 转弧度值
  const lat = latitude * Math.PI / 180; // 转弧度值
  lon = -lon; // js坐标系z坐标轴对应经度-90度，而不是90度

  // 经纬度坐标转球面坐标计算公式
  const x = R * Math.cos(lat) * Math.cos(lon);
  const y = R * Math.sin(lat);
  const z = R * Math.cos(lat) * Math.sin(lon);
  // 返回球面坐标
  return new Three.Vector3(x, y, z);
};
export const createWaveMesh = (options) => {
  const geometry = new Three.PlaneBufferGeometry(1, 1); //默认在XOY平面上
  const texture = options.textures.aperture;

  const material = new Three.MeshBasicMaterial({
    color: 0xe99f68,
    map: texture,
    transparent: true, //使用背景透明的png贴图，注意开启透明计算
    opacity: 1.0,
    depthWrite: false //禁止写入深度缓冲区数据
  });
  const mesh = new Three.Mesh(geometry, material);
  // 经纬度转球面坐标
  const coord = lon2xyz(options.radius * 1.001, options.lon, options.lat);
  const size = options.radius * 0.12; //矩形平面Mesh的尺寸
  mesh.scale.set(size, size, size); //设置mesh大小
  mesh.userData["size"] = size; //自顶一个属性，表示mesh静态大小
  mesh.userData["scale"] = Math.random(); //自定义属性._s表示mesh在原始大小基础上放大倍数  光圈在原来mesh.size基础上1~2倍之间变化
  mesh.position.set(coord.x, coord.y, coord.z);
  const coordVec3 = new Three.Vector3(coord.x, coord.y, coord.z).normalize();
  const meshNormal = new Three.Vector3(0, 0, 1);
  mesh.quaternion.setFromUnitVectors(meshNormal, coordVec3);
  return mesh;
};
export const createLightPillar = (options) => {
  const height = options.radius * 0.3;
  const geometry = new Three.PlaneBufferGeometry(options.radius * 0.05, height);
  geometry.rotateX(Math.PI / 2);
  geometry.translate(0, 0, height / 2);
  const material = new Three.MeshBasicMaterial({
    map: options.textures.light_column,
    color: options.index === 0
      ? options.punctuation.lightColumn.startColor
      : options.punctuation.lightColumn.endColor,
    transparent: true,
    side: Three.DoubleSide,
    depthWrite: false //是否对深度缓冲区有任何的影响
  });
  const mesh = new Three.Mesh(geometry, material);
  const group = new Three.Group();
  // 两个光柱交叉叠加
  group.add(mesh, mesh.clone().rotateZ(Math.PI / 2)); //几何体绕x轴旋转了，所以mesh旋转轴变为z
  // 经纬度转球面坐标
  const SphereCoord = lon2xyz(options.radius, options.lon, options.lat); //SphereCoord球面坐标
  group.position.set(SphereCoord.x, SphereCoord.y, SphereCoord.z); //设置mesh位置
  const coordVec3 = new Three.Vector3(
    SphereCoord.x,
    SphereCoord.y,
    SphereCoord.z
  ).normalize();
  const meshNormal = new Three.Vector3(0, 0, 1);
  group.quaternion.setFromUnitVectors(meshNormal, coordVec3);
  return group;
};

export const createPointMesh = (options) => {

  const geometry = new Three.PlaneBufferGeometry(1, 1); //默认在XOY平面上
  const mesh = new Three.Mesh(geometry, options.material);
  // 经纬度转球面坐标
  const coord = lon2xyz(options.radius * 1.001, options.lon, options.lat);
  const size = options.radius * 0.05; // 矩形平面Mesh的尺寸
  mesh.scale.set(size, size, size); // 设置mesh大小

  // 设置mesh位置
  mesh.position.set(coord.x, coord.y, coord.z);
  const coordVec3 = new Three.Vector3(coord.x, coord.y, coord.z).normalize();
  const meshNormal = new Three.Vector3(0, 0, 1);
  mesh.quaternion.setFromUnitVectors(meshNormal, coordVec3);
  return mesh;
};

// Arc

const createFlyLine = (radius, startAngle, endAngle, color) => {
  const geometry = new Three.BufferGeometry();

  const arc = new Three.ArcCurve(0, 0, radius, startAngle, endAngle, false);

  const pointsArr = arc.getSpacedPoints(100);
  geometry.setFromPoints(pointsArr);
  const percentArr = [];
  for (let i = 0; i < pointsArr.length; i++) {
    percentArr.push(i / pointsArr.length);
  }

  geometry.attributes.percent = new Three.BufferAttribute(new Float32Array(percentArr), 1);

  const colorArr = [];
  for (let i = 0; i < pointsArr.length; i++) {
    const color1 = new Three.Color(0xec8f43); //轨迹线颜色 青色
    const color2 = new Three.Color(0xf3ae76); //黄色
    const color = color1.lerp(color2, i / pointsArr.length);
    colorArr.push(color.r, color.g, color.b);
  }

  geometry.attributes.color = new Three.BufferAttribute(
    new Float32Array(colorArr),
    3
  );
  const size = 1.3;

  const material = new Three.PointsMaterial({
    size, //点大小
    // vertexColors: VertexColors
    transparent: true,
    depthWrite: false
  });

  material.onBeforeCompile = function(shader) {

    shader.vertexShader = shader.vertexShader.replace(
      "void main() {",
      [
        "attribute float percent;",
        "void main() {"
      ].join("\n")
    );
    // 调整点渲染大小计算方式
    shader.vertexShader = shader.vertexShader.replace(
      "gl_PointSize = size;",
      ["gl_PointSize = percent * size;"].join("\n")
    );
  };
  const FlyLine = new Three.Points(geometry, material);
  material.color = new Three.Color(color);
  FlyLine.name = "FlyLine";

  return FlyLine;
};

export const flyArc = (radius, lon1, lat1, lon2, lat2, options) => {
  const sphereCoord1 = lon2xyz(radius, lon1, lat1);
  // startSphereCoord：轨迹线起点球面坐标
  const startSphereCoord = new Three.Vector3(sphereCoord1.x, sphereCoord1.y, sphereCoord1.z);
  const sphereCoord2 = lon2xyz(radius, lon2, lat2);
  // startSphereCoord：轨迹线结束点球面坐标
  const endSphereCoord = new Three.Vector3(sphereCoord2.x, sphereCoord2.y, sphereCoord2.z);

  const startEndQua = _3Dto2D(startSphereCoord, endSphereCoord);
  // 调用arcXOY函数绘制一条圆弧飞线轨迹
  const arcLine = arcXOY(radius, startEndQua.startPoint, startEndQua.endPoint, options);
  arcLine.quaternion.multiply(startEndQua.quaternion);
  return arcLine;
};

const _3Dto2D = (startSphere, endSphere) => {

  const origin = new Three.Vector3(0, 0, 0); //球心坐标
  const startDir = startSphere.clone().sub(origin);
  const endDir = endSphere.clone().sub(origin);

  const normal = startDir.clone().cross(endDir).normalize();
  const xoyNormal = new Three.Vector3(0, 0, 1);

  const quaternion3D_XOY = new Three.Quaternion().setFromUnitVectors(normal, xoyNormal);

  const startSphereXOY = startSphere.clone().applyQuaternion(quaternion3D_XOY);
  const endSphereXOY = endSphere.clone().applyQuaternion(quaternion3D_XOY);

  // middleV3：startSphereXOY和endSphereXOY的中点
  const middleV3 = startSphereXOY.clone().add(endSphereXOY).multiplyScalar(0.5);
  const midDir = middleV3.clone().sub(origin).normalize();
  const yDir = new Three.Vector3(0, 1, 0);

  const quaternionXOY_Y = new Three.Quaternion().setFromUnitVectors(midDir, yDir);

  const startSpherXOY_Y = startSphereXOY.clone().applyQuaternion(quaternionXOY_Y);
  const endSphereXOY_Y = endSphereXOY.clone().applyQuaternion(quaternionXOY_Y);

  const quaternionInverse = quaternion3D_XOY.clone().invert().multiply(quaternionXOY_Y.clone().invert());
  return {
    quaternion: quaternionInverse,

    startPoint: startSpherXOY_Y,
    endPoint: endSphereXOY_Y
  };
};

export const arcXOY = (radius, startPoint, endPoint, options) => {

  const middleV3 = new Three.Vector3().addVectors(startPoint, endPoint).multiplyScalar(0.5);

  const dir = middleV3.clone().normalize();

  const earthRadianAngle = radianAOB(startPoint, endPoint, new Three.Vector3(0, 0, 0));

  const arcTopCoord = dir.multiplyScalar(radius + earthRadianAngle * radius * 0.2);

  const flyArcCenter = threePointCenter(startPoint, endPoint, arcTopCoord);

  const flyArcR = Math.abs(flyArcCenter.y - arcTopCoord.y);

  const flyRadianAngle = radianAOB(startPoint, new Three.Vector3(0, -1, 0), flyArcCenter);
  const startAngle = -Math.PI / 2 + flyRadianAngle;
  const endAngle = Math.PI - startAngle;

  const arcline = circleLine(flyArcCenter.x, flyArcCenter.y, flyArcR, startAngle, endAngle, options.color);

  arcline.center = flyArcCenter;
  arcline.topCoord = arcTopCoord;

  const flyAngle = (endAngle - startAngle) / 7;

  const flyLine = createFlyLine(flyArcR, startAngle, startAngle + flyAngle, options.flyLineColor);
  flyLine.position.y = flyArcCenter.y;

  arcline.add(flyLine);

  flyLine.flyEndAngle = endAngle - startAngle - flyAngle;
  flyLine.startAngle = startAngle;

  flyLine.AngleZ = arcline.flyEndAngle * Math.random();

  arcline.userData["flyLine"] = flyLine;

  return arcline;
};

const radianAOB = (A, B, O) => {
  // dir1、dir2：球面上两个点和球心构成的方向向量
  const dir1 = A.clone().sub(O).normalize();
  const dir2 = B.clone().sub(O).normalize();
  //点乘.dot()计算夹角余弦值
  const cosAngle = dir1.clone().dot(dir2);
  return Math.acos(cosAngle); //余弦值转夹角弧度值,通过余弦值可以计算夹角范围是0~180度
};

const circleLine = (x, y, r, startAngle, endAngle, color) => {
  const geometry = new Three.BufferGeometry();

  const arc = new Three.ArcCurve(x, y, r, startAngle, endAngle, false);

  const points = arc.getSpacedPoints(80);
  geometry.setFromPoints(points);
  const material = new Three.LineBasicMaterial({
    color: color || 0xd18547
  });
  return new Three.Line(geometry, material);
};

const threePointCenter = (p1, p2, p3) => {
  const L1 = p1.lengthSq(); //p1到坐标原点距离的平方
  const L2 = p2.lengthSq();
  const L3 = p3.lengthSq();
  const x1 = p1.x,
    y1 = p1.y,
    x2 = p2.x,
    y2 = p2.y,
    x3 = p3.x,
    y3 = p3.y;
  const S = x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2;
  const x = (L2 * y3 + L1 * y2 + L3 * y1 - L2 * y1 - L3 * y2 - L1 * y3) / S / 2;
  const y = (L3 * x2 + L2 * x1 + L1 * x3 - L1 * x2 - L2 * x3 - L3 * x1) / S / 2;
  // 三点外接圆圆心坐标
  return new Three.Vector3(x, y, 0);
};