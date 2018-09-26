import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import Home from "./views/Home.vue";
import MyMovies from "./views/MyMovies.vue";
import Login from "./views/Login.vue";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/mymovies",
      name: "mymovies",
      component: MyMovies
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ],
  mode: "history"
});
