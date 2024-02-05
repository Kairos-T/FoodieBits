import * as Three from "three"
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
}
export const createWaveMesh = (options) => {
  const geometry = new Three.PlaneBufferGeometry(1, 1); //默认在XOY平面上
  const texture = options.textures.aperture;

  const material = new Three.MeshBasicMaterial({
    color: 0xe99f68,
    map: texture,
    transparent: true, //使用背景透明的png贴图，注意开启透明计算
    opacity: 1.0,
    depthWrite: false, //禁止写入深度缓冲区数据
  });
  const mesh = new Three.Mesh(geometry, material);
  // 经纬度转球面坐标
  const coord = lon2xyz(options.radius * 1.001, options.lon, options.lat);
  const size = options.radius * 0.12; //矩形平面Mesh的尺寸
  mesh.scale.set(size, size, size); //设置mesh大小
  mesh.userData['size'] = size; //自顶一个属性，表示mesh静态大小
  mesh.userData['scale'] = Math.random(); //自定义属性._s表示mesh在原始大小基础上放大倍数  光圈在原来mesh.size基础上1~2倍之间变化
  mesh.position.set(coord.x, coord.y, coord.z);
  const coordVec3 = new Three.Vector3(coord.x, coord.y, coord.z).normalize();
  const meshNormal = new Three.Vector3(0, 0, 1);
  mesh.quaternion.setFromUnitVectors(meshNormal, coordVec3);
  return mesh;
}
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
    side: DoubleSide,
    depthWrite: false, //是否对深度缓冲区有任何的影响
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
}

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
}

export const getCirclePoints = (option) => {
  const list = [];
  for (
    let j = 0;
    j < 2 * Math.PI - 0.1;
    j += (2 * Math.PI) / (option.number || 100)
  ) {
    list.push([
      parseFloat((Math.cos(j) * (option.radius || 10)).toFixed(2)),
      0,
      parseFloat((Math.sin(j) * (option.radius || 10)).toFixed(2)),
    ]);
  }
  if (option.closed) list.push(list[0]);
  return list;
}