<template>
    <div>
        <template v-if="product">
            <h2>This is page for product {{ product.item }}</h2>
            <img :src="product.src">
        </template>
        <h2 v-else>
            Product not found
        </h2>
        <div>
            <button v-on:click="addItem(index)" class="btn large">Add to cart</button>  
        </div>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
                product: null
            };
        },
        mounted: function() {
            this.product = this.$store.getters.getProducts.find((item) => {
                return (item._id === this.$route.params.id);
            });
        }
    }
</script>
