<template>
<v-form ref="form" lazy-validation class="loginBox">
    <v-text-field
      v-if="this.errors && this.errors.email"   
      v-model="email"
      label="E-mail"
      color="#a04b4b"
      outline
      required
      error
    ></v-text-field>
    <v-text-field
      v-model="email"
      outline
      color="secondary"
      label="E-mail"
      required
    ></v-text-field>
   <v-text-field
      v-if="this.errors && this.errors.password"
      v-model="password"
      outline
      label="Password"
      required
      error
    ></v-text-field>
    <v-text-field
      v-model="password"
      color="secondary"
      outline
      label="Password"
      required
    ></v-text-field>
    <v-btn
      block="true"
      id="submitButton"
      color="secondary"
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
  background-color: #f4f4f4;
  padding: 30px;
  border-radius: 10px;
}

#submitButton{
  margin: 0 auto;
  width: 45%;
  color: black;
}



</style>
