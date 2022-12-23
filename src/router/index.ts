import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path: "/",
        component: ()=>import('../views/TestCss.vue')
    },
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
        name: 'appCreate',
        path: '/appCreate',
        component: ()=>import('../views/app/AppCreate.vue')
    },
    {
        name: 'config',
        path: '/config/:appid',
        component: ()=>import('../views/config/Index.vue'),
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router