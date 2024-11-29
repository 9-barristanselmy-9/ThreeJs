import * as THREE from "three";

// 1. Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0");

// 2. Create a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// cube geometry
const geometry = new THREE.BoxGeometry();
const geometry1 = new THREE.RingGeometry(1, 1.2, 50);
const material = new THREE.MeshLambertMaterial({
  color: "#0077b6",
});
const cube = new THREE.Mesh(geometry, material);
const cube1 = new THREE.Mesh(geometry1, material);

scene.add(cube);
scene.add(cube1);
cube.position.x = 3;
cube1.position.x = -3;

//4.add lighting
const light = new THREE.DirectionalLight(0xffffff, 10);
light.position.set(1, 1, 1);
scene.add(light);
// 3. Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// 6. Animate the scene

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube1.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
