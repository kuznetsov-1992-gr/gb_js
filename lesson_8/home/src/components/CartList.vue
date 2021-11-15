<template>
     <div class="cart-list">
            <CartItem v-bind:key="cart.id_product" v-for="cart in carts" v-bind:cart="cart"></CartItem>
        </div>  
</template>

<script>
const H_URL = 'http://192.168.31.59:8080';

// import Home from './Home.vue'

export default {

    name: 'CartList',
    
    components:{
        // Home
    },
       methods:{
        requestCart(){
            fetch(`${H_URL}/getCart`)
            .then((data) => {
                return data.json();
            })
            .then((dataJs) => {
                this.carts = dataJs
                console.log(dataJs)
            })

        },
    },
    props: ['visible-cart'],

    mounted(){
        this.requestCart()
    }



}
</script>
