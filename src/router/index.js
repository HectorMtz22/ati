import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Definitions from "../views/Definitions.vue";
import Factors from "../views/Factors.vue";
import Solutions from "../views/Solutions.vue";

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
    component: Definitions,
  },
  {
    path: "/factores",
    name: "Factores",
    component: Factors,
  },
  {
    path: "/soluciones",
    name: "Soluciones",
    component: Solutions,
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
