import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import URL from "../services/api/backend.js";
import router from "./router.js";
import swal from "sweetalert2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem("token"),
    token: localStorage.getItem("token"),
    user: localStorage.getItem("user"),
    userName: localStorage.getItem("userName"),
    errors: {}
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
    },
    ERRORS(state, payload) {
      state.errors = payload;
    },
    CLEAR_ERRORS(state) {
      state.errors = {};
    }
  },
  actions: {
    login({ commit }, payload) {
      // make the axios request and commit mutation upon success
      axios
        .post(URL + "/api/user/login", payload)
        .then(response => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", response.data.user);
          localStorage.setItem("userName", response.data.name);
          commit("LOGIN", response.data);
          commit("CLEAR_ERRORS");
          swal({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 3000,
            type: "success",
            title: "SUCCESSFULLY LOGGED IN!",
            customClass: "alert",
            background: "#353331"
          });
          router.push("/");
        })
        .catch(error => {
          commit("ERRORS", error.response.data);
        });
    },
    logout({ commit }, payload) {
      localStorage.clear();
      commit("LOGOUT", payload);
      swal({
        toast: true,
        position: "bottom",
        showConfirmButton: false,
        timer: 3000,
        type: "success",
        title: "SUCCESSFULLY LOGGED OUT!",
        customClass: "alert",
        background: "#353331"
      });
    },
    register({ commit }, payload) {
      axios
        .post(URL + "/api/user/register", payload)
        .then(() => {
          //Alert that user was successfully created and redirect to Login
          swal({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 3000,
            type: "success",
            title: "SUCCESSFULLY REGISTERED!",
            customClass: "alert",
            background: "#353331"
          });
          router.push("/login");
        })
        .catch(error => {
          commit("ERRORS", error.response.data);
        });
    }
  }
});
