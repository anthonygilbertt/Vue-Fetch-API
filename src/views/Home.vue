<template>
  <div class="home">
    <!-- Made with <img alt="Vue logo" src="../assets/logo.png" width="20px" height="20px"/>ue.js -->
    <p class="idk">Made with Vue.js, by Anthony Gilbert</p>
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
.idk {
  color: rgb(41, 69, 41);
  font-weight: bold;
  font-style: underline;
  font-size: 25px;
}
</style>
