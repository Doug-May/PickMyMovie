<template>
  <div id="app">
    <v-app>
      <page-header-comp/>
      <v-container>
        <transition name="router-anim" mode="out-in">
          <router-view/>
        </transition>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import PageHeaderComp from "@/components/PageHeaderComp.vue";
export default {
  name: "App",
  components: {
    PageHeaderComp
  }
};
</script>

<style>
#app {
  background-color: #353331;
  color: #b0b0b0;
  font-family: "Bai Jamjuree", sans-serif;
}
h1 {
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 3px;
}
p {
  letter-spacing: 1px;
  font-size: 16px;
}

.router-anim-enter-active {
  animation: coming 700ms;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 500ms;
}
@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(25px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-25px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
