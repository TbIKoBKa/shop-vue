<template>
    <div class="products">
        <form class="searchbar">
            <input placeholder="Пошук" v-model="search">
            <input type="submit"  class="btn">
        </form>
        <div class="product" v-for="(item) in filteredItems" v-bind:key="item._id">
            <div class="product-image">
                <img v-bind:src="item.src">
            </div>
            <div>
                <h4 class="product-title">
                    <router-link v-bind:to="'/product/' + item._id">
                        {{ item.item }}
                    </router-link>
                </h4>
                <label>{{item.price}}</label>
                <button class="btn" @click="addToCart(item)">Add to cart</button>  
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                items: [],
                search: '',
                searchResult: []
            };
        },
        mounted: async function() {
            const response = await fetch('http://localhost:4000/products')
            const data = await response.json()
            this.$store.commit('setProducts', data)
            this.items = data
        },
        computed: {
            filteredItems: function() {
                if (!this.search) {
                    return this.items;
                }
                return this.items.filter(element => {
                    return element.item.toUpperCase().includes(this.search.toUpperCase());
                });
            },
        },
        methods: {
            addToCart(item) {
                this.$store.commit('setCart', item)
            },
            removeFromCart(id) {
                this.$store.commit('removeItem', id)
            },
        },
    }
</script>
