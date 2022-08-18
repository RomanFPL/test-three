import * as THREE from "three";

const button = document.querySelector("#cretion-button");
const geometrySelector =
  document.querySelector<HTMLInputElement>("#selected-geometry");
const geometrySizeSelector =
  document.querySelector<HTMLInputElement>("#selected-size");

button?.addEventListener("click", () => {
  if (!geometrySelector || !geometrySizeSelector) return;
  const size = +geometrySizeSelector.value || 1;
  let geometry;

  if (geometrySelector.value === "cube") {
    geometry = new THREE.BoxGeometry();
  }

  if (geometrySelector.value === "sphere") {
    geometry = new THREE.SphereGeometry();
  }

  if (geometrySelector.value === "piramide") {
    geometry = new THREE.CylinderGeometry(0, undefined, undefined, 4);
  }

  const object = new THREE.Mesh(geometry);
  scene.add(object);

  object.scale.set(size, size, size);

  // TODO
  object.position.set(0, 0, 0);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);

    object.rotation.x += 0.01;
    object.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
