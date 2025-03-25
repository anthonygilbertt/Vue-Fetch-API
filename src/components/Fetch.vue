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

      <div v-if="video && embedUrl">
        <p><b>Video Content:</b></p>
        <iframe
          width="560"
          height="315"
          :src="embedUrl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div v-else-if="path">
        <p><b>Image Content:</b></p>
        <img :src="path" alt="" height="400" />
      </div>
    </div>
    <div v-else>
      <p>Error: {{ error }}</p>
    </div>

    <button class="button" @click="fetchData">Fetch Data</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "Main",
  setup() {
    const title = ref("");
    const explanation = ref("");
    const path = ref(null);
    const error = ref(null);
    const video = ref(false);

    const embedUrl = computed(() => {
      if (!path.value) return '';
      // Handle youtube.com/watch?v= format
      if (path.value.includes('youtube.com/watch?v=')) {
        const videoId = path.value.split('v=')[1].split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
      }
      // Handle youtu.be/ format
      if (path.value.includes('youtu.be/')) {
        const videoId = path.value.split('youtu.be/')[1];
        return `https://www.youtube.com/embed/${videoId}`;
      }
      // If it's already an embed URL, return as is
      if (path.value.includes('youtube.com/embed/')) {
        return path.value;
      }
      return path.value;
    });

    const fetchData = () => {
      try {
        fetch(
          "https://api.nasa.gov/planetary/apod?api_key=Se3ueF8eDAExgWXTfQsQVIgSXlvgOvhF8ziEu3m5",
          {
            method: "GET",
          }
        )
          .then((res) => res.json())
          .then((blob) => {
            console.log('APOD Response:', blob);
            console.log('Media Type:', blob.media_type);
            console.log('URL:', blob.url);
            
            title.value = blob.title;
            explanation.value = blob.explanation;
            path.value = blob.url;
            
            // Use the media_type from the API response
            video.value = blob.media_type === 'video';
            console.log('Is Video:', video.value);
            console.log('Computed Embed URL:', embedUrl.value);
          })
          .catch((err) => {
            console.error('Fetch Error:', err);
            error.value = err;
          });
      } catch (err) {
        console.error('Try-Catch Error:', err);
        error.value = err;
      }
    };

    return { title, explanation, fetchData, path, video, embedUrl, error };
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