import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem("token"),
    token: localStorage.getItem("token"),
    user: localStorage.getItem("user"),
    userName: localStorage.getItem("userName")
  },
  mutations: {
    LOGIN(state, payload) {
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = payload.user;
      state.userName = payload.name;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
      state.token = "";
      state.user = "";
      state.userName = "";
    }
  },
  actions: {
    login({ commit }, payload) {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", payload.user);
      localStorage.setItem("userName", payload.name);
      commit("LOGIN", payload);
    },
    logout({ commit }, payload) {
      localStorage.clear();
      commit("LOGOUT", payload);
    }
  }
});
