const GB_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    
    data: {
        goods: [],
        filteredGoods: [],
        carts: [],
        searchLine: '',
        inValue: '',
        visibleCart: false,
        elementGood: true,
    },
    methods: {
        requestGoods(){
            fetch(`${GB_URL}/catalogData.json`)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res);
                this.goods = res;
                this.filteredGoods = res;
                // console.log(res);
                // console.log(this.filteredGoods);
            })
            .catch('eroor')   
        },
        requestCarts(){
            fetch(`${GB_URL}/getBasket.json`)
            .then((data)  =>{
                return data.json();
            })
            .then((data) =>{
                console.log(data);
                this.carts = data.contents;
                console.log(this.carts);
            } )
        },

        sheart(){
            const regexp = new RegExp(`${this.inValue}`, 'i');
            this.filteredGoods = this.goods.filter((good) => {
                return regexp.test(good.product_name)
            })
            
            this.elementElse()
            
            // console.log('filter', this.filteredGoods)
            // console.log('goods', this.goods)
        },

        elementElse(){
            if(this.filteredGoods.length !== 0){
                this.elementGood = true;
            }else{
                this.elementGood = false;
            }
        },

        visibleCartList(){
            this.visibleCart = !this.visibleCart
        }
    },

    mounted(){
        this.requestGoods();
        this.requestCarts();
        // this.elementElse()
    }
});
console.log(app)