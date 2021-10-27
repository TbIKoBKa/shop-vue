import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App'
import ProductInfo from './components/ProductInfo'
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'

import store from './store'

const routes = [
    { path: '/', component: ProductsList },
    { path: '/product/:id', component: ProductInfo },
    { path: '/cart', component: Cart },
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    el: '#app',
    router,
    store,
})
