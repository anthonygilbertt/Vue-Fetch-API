<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Fetch />
    <FetchCSV />
    <FetchISS />
  </div>
</template>

<script>
// @ is an alias to /src
import Fetch from "@/components/Fetch.vue";
import FetchCSV from "@/components/FetchCSV.vue";
import FetchISS from "@/components/FetchISS.vue";

export default {
  name: "Home",
  components: {
    Fetch,
    FetchCSV,
    FetchISS,
  },
};
</script>
<style>
img {
  height: 70px;
}
</style>
