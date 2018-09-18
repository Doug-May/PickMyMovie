<template>
  <div id="header">
    <v-container>
      <v-toolbar flat color="#353331">
        <v-layout row>
          <v-flex xs12>
            <img id="logo" @click="goHome" src="../assets/logo.png">
            <!-- <v-icon id="logo" @click="goHome" color="#ffa660">movie</v-icon> -->
            <v-menu id="menu">
              <v-toolbar-title slot="activator">
                <v-icon color="#c0c0c0">account_box</v-icon>
                <v-icon color="#ffa660">arrow_drop_down</v-icon>
              </v-toolbar-title>
              <v-list dark>
                <v-list-tile v-if="!$store.state.isLoggedIn" >
                  <v-list-tile-title class="headerLink" @click="login" v-text="'Login'"></v-list-tile-title>
                </v-list-tile>
                <v-list-tile v-if="$store.state.isLoggedIn" >
                  <v-list-tile-title class="headerLink" @click="logout" v-text="'Logout'"></v-list-tile-title>
                </v-list-tile>  
                <v-list-tile v-if="$store.state.isLoggedIn" >
                  <v-list-tile-title class="headerLink" @click="goToMyMovies" v-text="'My Movies'"></v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-title class="headerLink" @click="goToAbout" v-text="'About'"></v-list-tile-title>
                </v-list-tile>                                
              </v-list>
            </v-menu>
          </v-flex>
        </v-layout>
      </v-toolbar>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "PageHeaderComp",
  data: function() {
    return {};
  },
  methods: {
    goHome: function() {
      this.$router.push({ name: "home" });
    },
    goToAbout: function() {
      this.$router.push({ name: "about" });
    },
    goToMyMovies: function() {
      this.$router.push({ name: "mymovies" });
    },
    loginHelper: function() {
      this.$store.state.isLoggedIn = !this.$store.state.isLoggedIn;
      this.$router.push({ name: "mymovies" });
      alert("You Logged In!");
    },
    login: function() {
      setTimeout(this.loginHelper, 170);
    },
    logoutHelper: function() {
      this.$store.state.isLoggedIn = !this.$store.state.isLoggedIn;
      this.$router.push({ name: "login" });
      alert("You Logged Out!");
    },
    logout: function() {
      setTimeout(this.logoutHelper, 170);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo {
  margin-top: -10px;
  transition: 200ms;
  width: 40px;
  cursor: pointer;
  font-size: 48px;
}
.headerLink {
  transition: 200ms;
  font-size: 15px;
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
