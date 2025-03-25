<template>
  <div class="skewed">
    <h3>NASA: Astronomy Picture of the Day</h3>
    <div v-if="!error">
      <p>
        <b><u>Title:</u></b> <i>"{{ title }}"</i>
      </p>
      <p>
        <b><u>Description:</u></b> {{ explanation }}
      </p>
      <p>
        <b><u>URL:</u></b> {{ path }}
      </p>

      <div v-if="video">
        <iframe
          width="560"
          height="315"
          :src="path"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div v-else><img :src="path" alt="" height="400" /></div>
    </div>

    <button class="button" @click="fetchData">Fetch Data</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Main",
  setup() {
    const title = ref("");
    const explanation = ref("");
    const path = ref(null);
    const error = ref(null);
    const video = ref(false);

    const fetchData = () => {
      try {
        fetch(
          "https://api.nasa.gov/planetary/apod?api_key=Se3ueF8eDAExgWXTfQsQVIgSXlvgOvhF8ziEu3m5",
          {
            method: "GET",
          }
        )
          .then((res) => {
            console.log(res);
            return res.json();
          })
          .then((blob) => {
            console.log(blob);
            title.value = blob.title;
            explanation.value = blob.explanation;
            path.value = blob.url;
          });
        error.value = null;
      } catch (err) {
        error.value = err;
      }
    };

    return { title, explanation, fetchData, path, video };
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
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background: #2c3e50;

  transform-origin: top right;
  color: #42b983;
}
.button {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>