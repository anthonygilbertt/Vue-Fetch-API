<template>
  <div class="skewed">
    <h3>NASA: ISS Location</h3>
    <div id="map">
      <div v-if="map"></div>
      <div v-else></div>
      <p>
        <b><u>Latitude:</u></b> {{ latitude }}
      </p>
      <p>
        <b><u>Longitude:</u></b> {{ longitude }}
      </p>
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
    const map = ref(false);
    const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
    const latitude = ref("");
    const longitude = ref("");

    const fetchData = async () => {
      const response = await fetch(api_url);
      const data = await response.json();
      latitude.value = data.latitude;
      longitude.value = data.longitude;
      console.log(data);
      console.log("latitude: ", latitude);
      console.log("longitude ", longitude);
      //   const data = await response.text();

      //   console.log(myChart);
    };

    return { map, error, fetchData, latitude, longitude };
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
.skewed {
  width: 100%;
  height: 80%;
  background: #2c3e50;

  color: #42b983;
}
</style>
