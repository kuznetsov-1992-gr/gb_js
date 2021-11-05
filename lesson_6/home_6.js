const GB_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('goods-list', {
    props: ['goods'],
    template: `
        <div class="goods-list">
            <goods-item v-bind:key="good.id_product" v-for="good in goods" v-bind:good="good"></goods-item>
        </div>
    `,
});

Vue.component('goods-item',{
    props: ['good'],
    template: `
        <div class="goods-item">
        <h3>{{good.product_name}}</h3>
        <p>{{good.price}}</p>
        </div>
    `,

});
Vue.component('input-btn',{
    data(){
        return {
            inputValue: '',
            
        }
    },
    template: `
        <div class="input-button-search">
            <input v-model="inputValue" type="text">
            <button v-on:click="inputValueOn">Искать</button>
           
        </div>
    `,

    methods: {
        inputValueOn(){
            this.$emit('filter',this.inputValue)
            // console.log( )
        },
        visibleCartFun(){
            this.visibleCart = !this.visibleCart
            this.$emit('oncart', this.visibleCart)
        }
    },
});



Vue.component('cart-btn', {

    template:  `<button v-on:click="visibleCartFun">Cart</button>`,

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
})

Vue.component('cart-list', {

    data(){
        return{
            carts: [],
        }
    },

    template:`
        <div class="cart-list">
            <cart-item v-bind:key="cart.id_product" v-for="cart in carts" v-bind:cart="cart"></cart-item>
        </div>    
    `,
    methods:{
        requestCart(){
            fetch(`${GB_URL}/getBasket.json`)
            .then((data) => {
                return data.json();
            })
            .then((dataJs) => {
                this.carts = dataJs.contents
                console.log(dataJs.contents)
            })

        }
    },
    props: ['visible-cart'],

    mounted(){
        this.requestCart()
    }
});

Vue.component('cart-item', {
    template: `
        <div class="cart-item" >
            <h3>{{cart.product_name}}</h3>
            <p>{{cart.price}}</p>
        
        </div>
    `,
    props: ['cart']
});


Vue.component('error-element',{
    
template: `
    <div class="error-element" >
        <p>{{error}}</p>
    </div>
`,

    props: ['error' , 'error-visible'],

  
})








const app = new Vue ({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        cart: [],
        errorVisible: false,
        errorEl: '',
        visibleCart: false
        

    },
    methods: {
        requestGoods(end_url){
            fetch(`${GB_URL}${end_url}`)
            .then((data) => {
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
        this.requestGoods(`/catalogData.json`)
    }
})
