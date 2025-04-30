<template>
  <div ref="container"></div>
</template>
<script setup lang="ts">
import { Scene, AxesHelper, PerspectiveCamera, WebGLRenderer, CameraHelper  } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

import { useTemplateRef, onMounted, onUnmounted } from "vue";

const container = useTemplateRef("container");
const gui = new GUI()

const init = () => {
  // 1. 创建场景
  const scene = new Scene();

  // 2.创建坐标轴
  const axesHelper = new AxesHelper(200);
  scene.add(axesHelper);

  // 3.创建相机
  const camera = new PerspectiveCamera(60, 1, 1, 1000);
  const camera2 = new PerspectiveCamera(20, 2, 150, 300);

  const cameraHelper = new CameraHelper(camera2)  

  // 设置相机位置
  camera.position.set(200, 200, 200);
  // 设置相机朝向
  camera.lookAt(0, 0, 0);

  // 4.场景添加相机
  scene.add(camera);
  scene.add(cameraHelper);

  // 5.创建渲染器
  const renderer = new WebGLRenderer();
  renderer.setSize(800, 800);

  const render = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  render();

  const handleChange = () => {
    camera2.updateProjectionMatrix();
    cameraHelper.update()
  }

  gui.add(camera2, "fov", [30, 60, 10]).onChange(handleChange);
  gui.add(camera2, "aspect", -300, {
    '16/9': 2,
    '4/3': 4/3,
  }).onChange(handleChange);
  gui.add(camera2, "near", -300, 300, 1);
  gui.add(camera2, "far", -300, 300, 1);


  // 7.添加到页面
  container.value?.append(renderer.domElement);

  // 8.添加控制器
  new OrbitControls(camera, renderer.domElement);
};

const guiClear = () => {
  gui.destroy();
};

onMounted(() => {
  init();
});

onUnmounted(() => {
  guiClear();
})
</script>
<style scoped lang="scss"></style>
