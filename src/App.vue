<template>
  <!-- <div id="nav"> -->
    <!-- <router-link :to="{ name: 'Home' }">Get Request</router-link> -->
    <!-- <router-link :to="{ name: 'Put' }">PUT Request</router-link> -->
  <!-- </div> -->
  <router-view />
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
