import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        name: 'login',
        path: '/login',
        component: ()=>import('../components/login/Login.vue')
    },
    {
        name: 'app',
        path: '/index',
        component: ()=>import('../views/app/Index.vue')
    },
    {
        name: 'config',
        path: '/config',
        component: ()=>import('../views/config/Index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router