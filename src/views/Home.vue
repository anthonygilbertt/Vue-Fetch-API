<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Fetch />
    <FetchCSV />
  </div>
</template>

<script>
// @ is an alias to /src
import Fetch from "@/components/Fetch.vue";
import FetchCSV from "@/components/FetchCSV.vue";

export default {
  name: "Home",
  components: {
    Fetch,
    FetchCSV,
  },
};
</script>
<style>
img {
  height: 70px;
}
</style>
