<template>
<v-form ref="form" lazy-validation class="loginBox">
    <v-text-field
      v-if="this.errors && this.errors.email"   
      v-model="email"
      label="E-mail"
      color="#a04b4b"
      outline
      required
      :rules="[() => this.errors.email]"
      error
    ></v-text-field>
    <v-text-field
      v-else
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
      :rules="[() => this.errors.password]"
      error
      type="show1 ? 'text' : 'password'"
      :append-icon="show1 ? 'visibility' : 'visibility_off'"
    ></v-text-field>
    <v-text-field
      v-else
      v-model="password"
      color="secondary"
      outline
      label="Password"
      required
      :type="show1 ? 'text' : 'password'"
      :append-icon="show1 ? 'visibility' : 'visibility_off'"
      @click:append="show1 = !show1"
    ></v-text-field>
    <v-btn
      block
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
      errors: {},
      show1: false
    };
  },
  methods: {
    login: function() {
      axios
        .post(URL + "/api/user/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          alert(response);
          //TODO
          // log the user in and update the store variables
          this.password = "";
          this.email = "";
        })
        .catch(error => {
          this.errors = error.response.data;
          this.password = "";
        });
    }
  }
};
</script>

<style scoped>
.loginBox {
  background-color: #f4f4f4;
  padding: 30px;
  border-radius: 10px;
}

#submitButton {
  margin: 0 auto;
  width: 45%;
  color: black;
}
</style>
