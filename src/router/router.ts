import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    redirect: "/3d",
    children: [
      {
        path: "/3d",
        name: "3D Demo",
        component: () => import("@/view/01.3d/index.vue"),
        meta: {
          title: "3D Demo",
          icon: "Monitor"
        }
      },
      {
        path: "dat.gui",
        component:() => import("@/view/02.dat.gui/index.vue"),
        meta: {
          title: "dat.gui 可视化调试",
          icon: "Menu"
        }
      },
      {
        path: "camera",
        component: () => import("@/view/03.camera/index.vue"),
        meta: {
          title: "相机",
          icon: "Camera"
        }
      },
      {
        path: "buffer-geometry",
        component: () => import("@/view/04.buffer-geometry/index.vue"),
        meta: {
          title: "几何体",
          icon: "Menu"
        }
      }
    ],
  },
];
