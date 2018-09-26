<template>
<v-form ref="form" lazy-validation class="loginBox">
    <v-text-field
      v-if="this.errors && this.errors.email"   
      v-model="email"
      label="E-mail"
      required
      error
    ></v-text-field>
    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>
   <v-text-field
      v-if="this.errors && this.errors.password"
      v-model="password"
      label="Password"
      required
      error
    ></v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      required
    ></v-text-field>
    <v-btn
      @click="login"
    >
    submit
    </v-btn>
  </v-form>
</template>

<script>
import axios from "axios";
import URL from "../../services/api/apiService.js";
//import loginValidation from "../../services/validation/login.js";
export default {
  name: "Login",
  data: function() {
    return {
      password: "",
      email: "",
      errors: null
    };
  },
  methods: {
    login: function() {
      axios
        .post(URL + "/api/user/login", {
          email: this.email,
          password: this.password
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>

.loginBox{
  margin: 0 12vh;
  background: rgba(245, 245, 245, 0.2);
  padding: 40px;
  border-radius: 10px;
}




</style>
