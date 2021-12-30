<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Fetch />
  </div>
</template>

<script>
// @ is an alias to /src
import Fetch from "@/components/Fetch.vue";

export default {
  name: "Home",
  components: {
    Fetch,
  },
};
</script>
<style>
img {
  height: 70px;
}
</style>
