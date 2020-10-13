import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category.vue'
import Login from './theme/Login.vue'

// const Category = () => System.import('./theme/Category.vue')
// const Login = () => System.import('./theme/Login.vue')

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
    routes: [
        {path: '/login', component: Login},
        {path: '/category', name: 'category', component: Category},
        {path: '/', redirect: '/category/front-end' }
    ]
})


export default router