<template>
    <button v-on:click="visibleCartFun">Cart</button>
</template>

<script>


export default {
    name: 'CartBtn',
    data(){
        return {
            visibleCart: false,
        }
    },

     methods: {
        visibleCartFun(){
            this.visibleCart = !this.visibleCart
            this.$emit('oncart', this.visibleCart)
        }
    },
}
</script>
