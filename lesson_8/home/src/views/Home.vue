

<template>
<div class="page">
    <header>
            
        <InputBtn v-on:filter="filterFun" ></InputBtn>
        <CartBtn v-on:oncart="visitCart"></CartBtn>
    </header>
    <main>
            <GoodList :goods="filteredGoods"></GoodList>
        </main>
        <section>
            <CartList  v-bind:visible-cart="visibleCart" v-if="visibleCart"></CartList> 
        </section>
        <ErrorElement v-bind:error-visible="errorVisible" v-if="errorVisible" v-bind:error="errorEl"></ErrorElement>

</div>
</template>

<script>
import CartBtn from '../components/CartBtn.vue';
import InputBtn from '../components/InputBtn.vue';
import GoodList from '../components/GoodList.vue';
import CartList from '../components/CartList.vue';
import ErrorElement from '../components/ErrorElement.vue';


const H_URL = 'http://127.0.0.1:3000';

export default {
   components:{
       CartBtn,
       InputBtn,
       GoodList,
       CartList,
       ErrorElement,
       
   },
   data(){
       return{
            goods: [],
            filteredGoods: [],
            cart: [],
            errorVisible: false,
            errorEl: '',
            visibleCart: false,
            
       }
   },
    methods: {
        requestGoods(url){
            fetch(`${H_URL}${url}`)
            .then((data) => {
                console.log( typeof data);
                return data.json();
            })
            .then((dataJson) => {
                this.goods = dataJson;
                this.filteredGoods = dataJson;
               
            })
            .catch((error) => {
                this.errorVisible = true;
                this.errorEl = error
                console.log(this.errorEl)
            })    
        },

        filterFun(inputValue){
            const reg = RegExp(inputValue, 'i')
            this.filteredGoods = this.goods.filter((good)=> reg.test(good.product_name));
        },
        visitCart(visibleCart){
            this.visibleCart = visibleCart;
            console.log(this.visibleCart);
        }


    },
    mounted(){
        this.requestGoods(`getBasket.json`)
    }


}
</script>
