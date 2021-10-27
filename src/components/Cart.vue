<template>
    <div class="products">
        <h1>Cart</h1>
        <template v-if="cart.length">
            <div class="product" v-for="(item) in cart" v-bind:key="item.id">
                <div class="product-image">
                    <img v-bind:src="item.src">
                </div>
                <div>
                    <h4 class="product-title">
                        <router-link v-bind:to="'/product/' + item.id">
                            {{ item.item }}
                        </router-link>
                    </h4>
                    <label>{{item.price}}</label>
                    <button class="btn" @click="removeFromCart(item.id)">Remove</button>  
                </div>
            </div>
        </template>
        <div v-else>
            Cart is empty
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            cart() {
                return this.$store.getters.getCart
            },
        },
        methods: {
            removeFromCart(id) {
                this.$store.commit('removeItem', id)
            },
        },
    }
</script>
