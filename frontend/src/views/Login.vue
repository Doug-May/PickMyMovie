<template>
    <div>
        <h1>Login</h1>
        <login-comp/>        
    </div>
</template>

<script>
import LoginComp from "@/components/LoginComp.vue";
export default {
  name: "login",
  components: {
    LoginComp
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
