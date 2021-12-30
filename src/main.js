import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')






// let app


// this gets fired when the Auth State changes
// for example: when when we "have a user"
// (The user state changes)
// if (!app) {
//     app = createApp(App)
//         .use(router)
//         .mount('#app') //we don't want to mount until the auth state changes
// }