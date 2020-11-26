import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/definicion",
    name: "Definicion",
    component: () => import("../views/Definitions"),
  },
  {
    path: "/factores",
    name: "Factores",
    component: () => import("../views/Factors"),
  },
  {
    path: "/soluciones",
    name: "Soluciones",
    component: () => import("../views/Solutions"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  //mode: "history",
  routes,
});

export default router;
