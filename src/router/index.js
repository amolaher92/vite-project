import {createRouter, createWebHistory} from 'vue-router'
import routes from "./routes";

const router = createRouter({
    model: 'history',
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || {top: 0, behavior: 'smooth'}
        /*return {top: null, left: null, behavior: null}*/
    }
})

export default router
