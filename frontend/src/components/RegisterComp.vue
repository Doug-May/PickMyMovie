<template>
  <div>
    <v-form ref="form" lazy-validation class="loginBox">
    <v-text-field
      @keyup.enter="register"
      v-if="$store.state.errors.name"   
      v-model="name"
      label="User Name"
      color="#a04b4b"
      outline
      required
      :rules="[() => $store.state.errors.name]"
      error
    ></v-text-field>
    <v-text-field
      @keyup.enter="register"
      v-else
      v-model="name"
      outline
      color="secondary"
      label="User Name"
      required
    ></v-text-field>

    <v-text-field
      @keyup.enter="register"
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
      @keyup.enter="register"
      v-else
      v-model="email"
      outline
      color="secondary"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      @keyup.enter="register"
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
      @keyup.enter="register"
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

   <v-text-field
      @keyup.enter="register"
      v-if="$store.state.errors.password2"
      v-model="password2"
      outline
      label="Confirm Password"
      required
      :rules="[() => $store.state.errors.password2]"
      error
      :type="show2 ? 'text' : 'password'"
      :append-icon="show2 ? 'visibility' : 'visibility_off'"
      @click:append="show2 = !show2"
    ></v-text-field>
    <v-text-field
      @keyup.enter="register"
      v-else
      v-model="password2"
      color="secondary"
      outline
      label="Confirm Password"
      required
      :type="show2 ? 'text' : 'password'"
      :append-icon="show2 ? 'visibility' : 'visibility_off'"
      @click:append="show2 = !show2"
    ></v-text-field>

    <v-btn
      block
      id="submitButton"
      color="secondary"
      @click="register"
    >
    submit
    </v-btn>
  </v-form>
  <p>Back to <span id="redirect" @click="$router.push('/login')">login</span></p>
  </div>
</template>

<script>
//import loginValidation from "../../services/validation/login.js";
export default {
  name: "Register",
  data: function() {
    return {
      name: "",
      password: "",
      password2: "",
      email: "",
      show1: false,
      show2: false
    };
  },
  methods: {
    register: function() {
      const req = {
        name: this.name,
        email: this.email,
        password: this.password,
        password2: this.password2
      };
      this.$store.dispatch("register", req);
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
