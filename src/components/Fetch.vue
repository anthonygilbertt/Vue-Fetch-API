<template>
  <div class="hello">
    <h3>NASA: Astronomy Picture of the Day</h3>
    <div v-if="!error">
      <p>Title: {{ title }}</p>
      <p>description: {{ explanation }}</p>
      <p>{{ path }}</p>

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

    <button @click="fetchData">Fetch Data</button>
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

    return { title, explanation, fetchData, path };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
