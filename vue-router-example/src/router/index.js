import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: () => import("../views/Brazil.vue"),
  },
  {
    path: "/panama",
    name: "Panama",
    component: () => import("../views/Panama.vue"),
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: () => import("../views/Hawaii.vue"),
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: () => import("../views/Jamaica.vue"),
  },
  {
    path:'/destination/:id',
    component:() => import("@/views/DestinationShow.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
