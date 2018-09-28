<template>
    <div>
        <h1 v-if="$store.state.isLoggedIn">Welcome {{ $store.state.userName }}!</h1>
        <h1 v-else>Welcome</h1>
    </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
