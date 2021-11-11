const H_URL = 'http://127.0.0.1:3000';

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
        <button v-on:click="cartIndificator"> В корзину</button>
        </div>
    `,
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
    props: ['carts'],
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
});

Vue.component('cart-item', {
    template: `
        <div class="cart-item" >
            <h3>{{cart.product_name}}</h3>
            <p>{{cart.price}}</p>
            <button v-on:click="removeCartIndi"> удалить</button>
        
        </div>
    `,
    props: ['cart'],

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
        this.requestGoods(`/catalogData`)
    }
})
