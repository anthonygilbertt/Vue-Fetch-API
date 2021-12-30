<template>
  <div class="csvdata">
    <h3>NASA:</h3>
    <div>
      <div v-if="video"></div>
      <div v-else></div>
    </div>

    <button @click="fetchData">Fetch Data</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Main",
  setup() {
    const error = ref(null);
    const video = ref(false);

    const fetchData = async () => {
      //   try {
      // fetch("/assets/Zonal-Annual-Means.csv", {
      //     fetch("test.csv", {
      //       method: "GET",
      //     })
      //       .then((res) => {
      //         console.log(res);
      //         return res.text();
      //       })
      //       .then((data) => {
      //         console.log(data);
      //       });
      //     error.value = null;
      //   } catch (err) {
      //     error.value = err;
      //   }

      // getData();
      // async function getData() {
      // const response = await fetch(".Zonal-Annual-Means.csv");
      const response = await fetch("Zonal-Annual-Means.csv");
      const data = await response.text();
      console.log(data);
      // }
    };

    return { fetchData, video, error };
  },
};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h3 {
  text-decoration: underline;
}
</style>
