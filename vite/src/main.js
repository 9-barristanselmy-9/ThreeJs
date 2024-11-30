import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
const canvas = document.getElementById("canvas");

//1. SCENE
const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0");
//2. CAMERA
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//object

const geometry = new THREE.DodecahedronGeometry();

const material = new THREE.MeshLambertMaterial({
  color: "#0077b6",
  emissive: "#0077b6",
});
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({
  color: "#BCCCDC",
  emissive: "#5e60ce",
});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;
scene.add(dodecahedron);
scene.add(box);

//4. LIGHTING
const light = new THREE.SpotLight(0x006769, 100);

light.position.set(1, 1, 1);
scene.add(light);
//5. RENDERER
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 0, 5);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

//6. ANIMATE THE SCENE
function animate() {
  requestAnimationFrame(animate);
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  box.rotation.y += 0.008;
  controls.update();

  renderer.render(scene, camera);
}

//7. RESIZE
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
