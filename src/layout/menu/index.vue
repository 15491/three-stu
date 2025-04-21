<template>
  <el-menu
    :default-active="activePath"
    class="el-menu"
    router
  >
    <template v-for="item in menuRoutes" :key="item.path">
      <el-menu-item :index="item.path">
        <el-icon><Monitor /></el-icon>
        <span>{{ item.meta?.title || item.name }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { routes } from "@/router/router";
import { useRoute } from "vue-router";
import { Monitor } from '@element-plus/icons-vue'
import { computed } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

const route = useRoute();

// 获取需要显示在菜单中的路由
const menuRoutes = routes[0].children as RouteRecordRaw[];

// 计算当前激活的路由路径
const activePath = computed(() => {
  // 获取当前路由的完整路径
  const currentPath = route.path;
  
  // 如果是根路径，返回重定向路径
  if (currentPath === '/') {
    return routes[0].redirect;
  }
  
  // 检查当前路径是否匹配任何菜单项
  const matchedRoute = menuRoutes.find(item => {
    const menuPath = item.path.startsWith('/') ? item.path : `/${item.path}`;
    return currentPath === menuPath;
  });
  
  // 如果找到匹配的菜单项，返回其路径
  if (matchedRoute) {
    return matchedRoute.path;
  }
  
  return currentPath;
});
</script>

<style scoped lang="scss">
.el-menu {
  height: 100%;
}
</style>
