<template>
  <div ref="container"></div>
</template>
<script setup lang="ts">
import { Scene, AxesHelper, PerspectiveCamera, WebGLRenderer } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { useTemplateRef, onMounted } from "vue";

const container = useTemplateRef("container");

const init = () => {
  // 1. 创建场景
  const scene = new Scene();

  // 2.创建坐标轴
  const axesHelper = new AxesHelper(200);
  scene.add(axesHelper);

  // 3.创建相机
  const camera = new PerspectiveCamera(60, 1, 1, 1000);
  // 设置相机位置
  camera.position.set(200, 200, 200);
  // 设置相机朝向
  camera.lookAt(0, 0, 0);

  // 4.场景添加相机
  scene.add(camera);

  // 5.创建渲染器
  const renderer = new WebGLRenderer();
  renderer.setSize(500, 500);

  const render = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  render();

  // 7.添加到页面
  container.value?.append(renderer.domElement);

  // 8.添加控制器
  new OrbitControls(camera, renderer.domElement);
};

onMounted(() => {
  init();
});
</script>
<style scoped lang="scss"></style>
