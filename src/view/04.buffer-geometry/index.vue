<template>
  <div class="container"></div>
</template>

<script setup>
import { Scene, PerspectiveCamera, WebGLRenderer, BufferGeometry, BufferAttribute, Points, PointsMaterial } from 'three';
import { useTemplateRef } from 'vue';

const container = useTemplateRef('container');

const init = () => {
  // 1.创建场景
  const scene = new Scene();
  
  // 2.创建光源
  const pointLight = new PointLight(0xffffff, 1000);
  scene.add(pointLight);

  // 3.创建相机
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 10);
  scene.add(camera);
  
}


</script>

<style lang="scss" scoped>

</style>