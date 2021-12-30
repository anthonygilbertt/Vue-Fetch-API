import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/put',
        name: 'Put',
        // route level code-splitting
        // this generates a separate chunk (put.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../views/Put.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router