import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import swal from "sweetalert2";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: "#d0d0d0",
    secondary: "#ffa660",
    accent: "#c0c0c0",
    error: "#a04b4b",
    info: "#d0d0d0",
    success: "#d0d0d0",
    warning: "#d0d0d0"
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

//clear errors before each navigation
router.beforeEach((to, from, next) => {
  store.commit("CLEAR_ERRORS");
  next();
});
