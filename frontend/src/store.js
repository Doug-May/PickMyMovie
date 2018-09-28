import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    token: "",
    user: "",
    userName: ""
  },
  mutations: {
    logIn(state, payload) {
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = payload.user;
      state.userName = payload.name;
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.token = "";
      state.user = "";
      state.userName = "";
    }
  },
  actions: {}
});
