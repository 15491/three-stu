<template>
  <div ref="container"></div>
</template>

<script setup lang="ts">
import {
  Scene,
  BoxGeometry,
  MeshLambertMaterial,
  Color,
  Mesh,
  PointLight,
  PerspectiveCamera,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { useTemplateRef, onMounted } from "vue";

const container = useTemplateRef("container");

const init = () => {
  // 1.创建场景
  const scene = new Scene();

  // 2.创建几何
  const geometry = new BoxGeometry(100, 100, 100);
  // 3.创建材质
  const material = new MeshLambertMaterial({
    color: new Color("orange"),
  });
  // 4.创建网格
  const mesh = new Mesh(geometry, material);
  mesh.position.set(0, 0, 0);
  scene.add(mesh);

  // 5.创建光源
  const light = new PointLight(0xffffff, 10000);
  light.position.set(80, 80, 80);
  scene.add(light);

  // 6.创建相机
  const camera = new PerspectiveCamera(60, 1, 1, 1000);
  camera.position.set(200, 200, 200);
  camera.lookAt(0, 0, 0);

  // 7.创建渲染器
  const renderer = new WebGLRenderer();
  renderer.setSize(500, 500);

  // 8.渲染
  const render = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  render();

  // 9.添加到页面
  container.value?.append(renderer.domElement);

  guiInit(mesh, light);

  new OrbitControls(camera, renderer.domElement);
};
const guiInit = (mesh: Mesh, pointLight: PointLight) => {
  const gui = new GUI();

  const meshFolder = gui.addFolder("mesh");
  meshFolder.addColor(mesh.material, "color");
  meshFolder.add(mesh.position, "x").step(10);
  meshFolder.add(mesh.position, "y").step(10);
  meshFolder.add(mesh.position, "z").step(10);

  const lightFolder = gui.addFolder("light");
  lightFolder.add(pointLight.position, "x").step(10);
  lightFolder.add(pointLight.position, "y").step(10);
  lightFolder.add(pointLight.position, "z").step(10);
  lightFolder.add(pointLight, "intensity").step(1000);

  const otherFolder = gui.addFolder("other");
  const obj = {
    aaa: "你好",
    bbb: "世界",
  };
  otherFolder.add(obj, "aaa");
  otherFolder.add(obj, "bbb");
};
onMounted(() => {
  init();
});
</script>

<style scoped lang="scss"></style>
