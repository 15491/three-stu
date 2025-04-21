<template>
  <div ref="container"></div>
</template>
<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { useTemplateRef, onMounted } from "vue";

const container = useTemplateRef("container");

const init = () => {
  // 1. 创建场景
  const scene = new THREE.Scene();

  // 2. 创建几何体
  const geometry = new THREE.BoxGeometry(100, 100, 100);
  const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color("orange"),
  });

  // 3. 创建网格
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, 0);
  scene.add(mesh);

  // 4. 创建辅助线
  const axesHelper = new THREE.AxesHelper(150);
  scene.add(axesHelper);

  // 5. 创建光源
  const pointLight = new THREE.PointLight(0xffffff, 10000);
  pointLight.position.set(80, 80, 80);
  scene.add(pointLight);

  // 6. 创建相机
  const camera = new THREE.PerspectiveCamera(60, 1, 1, 1000);
  camera.position.set(200, 200, 200);
  camera.lookAt(0, 0, 0);

  // 7. 创建渲染器
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(500, 500);

  // 8. 渲染
  const render = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(render)
  }
  render()

  // 9. 添加到页面
  container.value?.append(renderer.domElement);

  new OrbitControls(camera, renderer.domElement);
};

onMounted(() => {
  init();
});
</script>
<style scoped lang="scss"></style>
