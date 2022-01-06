import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/verify",
    name: "verify",
    // route level code-splitting
    // this generates a separate chunk (verify.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "verify" */ "../views/verify.vue")
  },

  {
    path: "/verify2",
    name: "verify2",
    // route level code-splitting
    // this generates a separate chunk (verify.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "verify" */ "../views/verify2.vue")
  },
  {
    path: "/result2",
    name: "result2",
    component: () => import("../views/result2.vue")
  },

  {
    path: "/result",
    name: "result",
    component: () => import("../views/result.vue")
  },
  {
    path: "/update",
    name: "update",
    component: () => import("../views/update.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
