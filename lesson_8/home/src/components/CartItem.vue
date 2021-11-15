<template>
        <div class="cart-item" >
        <h3>{{cart.product_name}}</h3>
        <p>{{cart.price}}</p>
        <button v-on:click="removeCartIndi">
            удалить
        </button>
        
    </div>
</template>
<script>
import CartList from './CartList.vue'


export default {
    components: {
        CartList
    },

   
    methods: {
        removeCartIndi(){
            const item = {...this.cart};
            console.log(item)
            this.removeCart(item)
            
        },
        removeCart(data){
            fetch(`${H_URL}/removeCart`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .catch(err => console.log(err));
            
        }
    }

}
</script>