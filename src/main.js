import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import VueMapbox from "vue-mapbox";
// import Mapbox from "mapbox-gl";




// Vue.use(VueMapbox, { mapboxgl: Mapbox });

createApp(App).use(router).mount('#app')

// createApp(App).use(VueMapbox, { mapboxgl: Mapbox }).mount('#app')