<template>
  <div id="header">
    <v-container>
      <v-toolbar flat color="#353331">
        <v-layout row>
          <v-flex xs12>            
            <img id="logo" @click="$router.push('/')" src="../assets/logo.png">
            <digital-time/>
            <h4 
            v-if="!$store.state.isLoggedIn"
            class="headerLink" 
            @click="$router.push('/login')">
            LOGIN</h4>
            <h4 
            v-if="$store.state.isLoggedIn"
            class="headerLink" 
            @click="logout">
            LOGOUT</h4>            
            <h4 
            v-if="$store.state.isLoggedIn"
            class="headerLink" 
            @click="$router.push('/mymovies')">
            PICKS</h4>
            <h4      
            class="headerLink" 
            @click="$router.push('/about')">
            ABOUT</h4>
            
            
          </v-flex>
        </v-layout>
      </v-toolbar>
    </v-container>
  </div>
</template>

<script>
import DigitalTime from "./Time.vue";
export default {
  components: {
    DigitalTime
  },
  name: "PageHeaderComp",
  data: function() {
    return {};
  },
  methods: {
    logout() {
      this.$router.push("/login");
      this.$store.dispatch("logout");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo {
  float: left;
  margin-top: -15px;
  transition: 200ms;
  width: 40px;
  cursor: pointer;
  font-size: 48px;
}
.headerLink {
  font-weight: 400;
  float: right;
  margin: 0px 6px;
  transition: 200ms;
  font-size: 13px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  color: #b0b0b0;
}
.headerLink:hover {
  color: #ffa660;
}
#menu {
  float: right;
  margin-left: 8%;
}
</style>
