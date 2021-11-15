<template>
    <div class="goods-item">
    <h3>{{good.product_name}}</h3>
    <p>{{good.price}}</p>
    <button v-on:click="cartIndificator"> В корзину</button>
    </div>
</template>



<script>

import GoodList from './GoodList.vue'

export default {

    components:{
        GoodList
    },

    props: ['good'],

    methods:{
        cartIndificator() {
            let titel = this.good;
            this.addCart(titel)
        },

        addCart(data){
            const objData = {...data}
            console.log(objData)
                

            fetch(`${H_URL}/addToCart`,{
                method: 'POST',
                body: JSON.stringify(objData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then()
            .catch(error => {
                console.log('Ошибка: ', error )
            })
                
        }
    }
}
</script>

<style>

</style>