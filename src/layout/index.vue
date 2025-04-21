<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><Menu /></el-aside>
      <el-main><Content /></el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Menu from "./menu/index.vue";
import Content from "./content/index.vue";
</script>
<style scoped lang="scss">
:deep(.el-aside) {
  height: 100vh;
  overflow: auto;
}

:deep(.el-main) {
  overflow: auto;
}
</style>
