import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const ThreeBackground = () => {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  camera.position.setZ(30);
  renderer.render(scene, camera);

  const albedoTexture = new THREE.TextureLoader().load(
    "rock-texture/rock-alb.png"
  );
  const normalTexture = new THREE.TextureLoader().load(
    "rock-texture/rock-normal.png"
  );
  const roughnessTexture = new THREE.TextureLoader().load(
    "rock-texture/rock-roughness.png"
  );
  const aoTexture = new THREE.TextureLoader().load("rock-texture/rock-ao.png");
  const heightTexture = new THREE.TextureLoader().load(
    "rock-texture/rock-height.png"
  );

  // albedoTexture.encoding = THREE.sRGBEncoding;
  // normalTexture = THREE.NormalMap;
  // roughnessTexture = THREE.GlossinessMap;

  const geometry = new THREE.TorusGeometry(10, 3, 32, 160);
  const material = new THREE.MeshStandardMaterial({
    map: albedoTexture,
    normalMap: normalTexture,
    roughnessMap: roughnessTexture,
    aoMap: aoTexture,
    displacementMap: heightTexture,
  });
  const torus = new THREE.Mesh(geometry, material);

  const albedoTexture2 = new THREE.TextureLoader().load(
    "wall-texture/wall-alb.png"
  );
  const normalTexture2 = new THREE.TextureLoader().load(
    "wall-texture/wall-normal.png"
  );
  const roughnessTexture2 = new THREE.TextureLoader().load(
    "wall-texture/wall-roughness.png"
  );
  const aoTexture2 = new THREE.TextureLoader().load("wall-texture/wall-ao.png");
  const heightTexture2 = new THREE.TextureLoader().load(
    "wall-texture/wall-height.png"
  );

  const icoGeometry = new THREE.SphereGeometry(5, 192, 96);
  const icoMaterial = new THREE.MeshStandardMaterial({
    map: albedoTexture2,
    normalMap: normalTexture2,
    roughnessMap: roughnessTexture2,
    aoMap: aoTexture2,
    displacementMap: heightTexture2,
  });
  const ico = new THREE.Mesh(icoGeometry, icoMaterial);
  ico.position.set(12, 0, 12);

  const albedoTexture3 = new THREE.TextureLoader().load(
    "moon-texture/moon.jpg"
  );
  const heightTexture3 = new THREE.TextureLoader().load(
    "moon-texture/normal.jpg"
  );

  const moonGeometry = new THREE.SphereGeometry(3, 64, 64);
  const moonMaterial = new THREE.MeshStandardMaterial({
    map: albedoTexture3,
    normalMap: heightTexture3,
  });
  const moon = new THREE.Mesh(moonGeometry, moonMaterial);

  scene.add(torus, ico, moon);

  const pointLight = new THREE.PointLight(0xffffff, 150);
  pointLight.position.set(10, 10, 10);

  const ambientLight = new THREE.AmbientLight(0xffffff, 2);

  const lightHelper = new THREE.PointLightHelper(pointLight);

  const gridHelper = new THREE.GridHelper(200, 50);

  scene.add(pointLight, ambientLight, lightHelper, gridHelper);

  const controls = new OrbitControls(camera, renderer.domElement);

  function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3)
      .fill(undefined, 0, 3)
      .map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
  }
  Array(200).fill(undefined, 0, 200).forEach(addStar);

  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    moon.rotation.x += 0.05;
    moon.rotation.y += 0.075;
    moon.rotation.z += 0.05;

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
  }

  document.body.onscroll = moveCamera;

  function animate() {
    requestAnimationFrame(animate);
    torus.rotation.z += 0.0015;

    controls.update();

    renderer.render(scene, camera);
  }
  animate();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
      ref={(mount) => {
        mount?.appendChild(renderer.domElement);
      }}
    ></div>
  );
};
export default ThreeBackground;
