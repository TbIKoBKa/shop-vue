import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        products: [],
        cart: []
    },
    mutations: {
        setProducts: (state, products) => state.products = products,
        setCart: (state, item) => state.cart.push({ ...item, amount: 1 }),
        removeItem: (state, id) => state.cart = state.cart.filter((item) => item._id !== id),
        incrementProductAmount: (state, id) => state.cart.find((item) => item._id === id).amount++,
        decrementProductAmount: (state, id) => {
            const product = state.cart.find((item) => item._id === id)
            product.amount > 1 && product.amount--
        },
    },
    getters: {
        getProducts: (state) => state.products,
        getCart: (state) => state.cart,
    }
})
export default store;