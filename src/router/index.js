import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/views/Settings.vue"),
    beforeEnter(to, from, next) {
      if (!store.getters.isAuthenticated) {
        next({ name: "Login" });
      } else next();
    }
  },
  {
    path: "/editor",
    name: "ArticleCreator",
    component: () => import("@/views/ArticleCreate.vue"),
    beforeEnter(to, from, next) {
      if (!store.getters.isAuthenticated) {
        next({ name: "Login" });
      } else next();
    }
  },
  {
    path: "/editor/:articleId",
    name: "ArticleEditor",
    component: () => import("@/views/ArticleEdit.vue")
  },
  {
    path: "/article/:articleId",
    name: "Article",
    component: () => import("@/views/Article.vue")
  },
  {
    path: "/:username",
    name: "Profile",
    component: () => import("@/views/Profile.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
