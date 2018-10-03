<template>
  <div>
    <v-form ref="form" lazy-validation class="loginBox">
    <v-text-field
      @keyup.enter="login"
      v-if="$store.state.errors.email"   
      v-model="email"
      label="E-mail"
      color="#a04b4b"
      outline
      required
      :rules="[() => $store.state.errors.email]"
      error
    ></v-text-field>
    <v-text-field
      @keyup.enter="login"
      v-else
      v-model="email"
      outline
      color="secondary"
      label="E-mail"
      required
    ></v-text-field>
   <v-text-field
      @keyup.enter="login"
      v-if="$store.state.errors.password"
      v-model="password"
      outline
      label="Password"
      required
      :rules="[() => $store.state.errors.password]"
      error
      :type="show1 ? 'text' : 'password'"
      :append-icon="show1 ? 'visibility' : 'visibility_off'"
      @click:append="show1 = !show1"
    ></v-text-field>
    <v-text-field
      @keyup.enter="login"
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
  <p>Don't have an account? Click <span id="redirect" @click="$router.push('/register')">here</span> to create one</p>
  </div>
</template>

<script>
//import loginValidation from "../../services/validation/login.js";
export default {
  name: "Login",
  data: function() {
    return {
      password: "",
      email: "",
      show1: false
    };
  },
  methods: {
    login: function() {
      const req = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("login", req);
    }
  }
};
</script>

<style scoped>
.loginBox {
  background-color: #f4f4f4;
  padding: 30px;
  border-radius: 10px;
  max-width: 700px;
  margin: auto;
}

#submitButton {
  margin: 0 auto;
  width: 45%;
  color: black;
}

#redirect {
  transition: 200ms;
  color: #ffa660;
  cursor: pointer;
}

#redirect:hover {
  transition: 200ms;
  opacity: 0.4;
}

p {
  text-align: center;
  margin-top: 30px;
}
</style>
