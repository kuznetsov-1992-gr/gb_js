const GB_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

class GoodItem {
    constructor(product_name, price, id_product){
        this.product_name = product_name;
        this.price = price;
        this.id_product = id_product;
        
        
        
        
    }
    render(){
        return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p><button class="batton-goods" data-id=${this.id_product}> В Корзину </button></div>`
    }
 

   

}




class GoodList {
    constructor(cart){
        this.goods = [];
        this.filterGoods = [];
        this.cart = cart;
        this.cartEl = document.querySelector('.cart-list');
        this.goodEl = document.querySelector('.goods-list');
        this.goodEl.addEventListener('click',this.addToCart.bind(this));
        this.visToCart = document.querySelector('.bsk');
        this.visToCart.addEventListener('click', this.visualCart.bind(this));
        this.search = document.querySelector('.goods-search');
        this.sBtn = document.querySelector('.search-button');
        this.sBtn.addEventListener('click', this.addFilterList.bind(this))
      
    }
    addFilterList(){
        const str = new RegExp (`${this.search.value}`, `i`);
        this.filterGoods = (this.goods.filter((good) =>{
            return str.test(good.product_name)
        }))
        // console.log(this.filterGoods)
        this.render(this.filterGoods);
    }

    // choiceGoods(answer) {
    //     if(answer.length !== 0){
    //         // this.render(this.goods)
    //         console.log('true')
    //     }else{
    //         console.log('false')
    //         // this.render(this.filterGoods)
    //     }
    // }
    fetchGoods() {
        fetch(`${GB_URL}/catalogData.json`,{
            method: 'GET'
        })
        .then((res)=>{
            return res.json()
        })
        .then((res) =>{
            this.goods = res
           
            this.render()
           
        })
        .catch((rej)=>{
            console.log(rej)
        })
    }

    render(answerFilter =this.goods){
        let listHtml = '';
        answerFilter.forEach(good =>{
            const goodItem = new GoodItem(good.product_name, good.price, good.id_product);
            listHtml += goodItem.render();
        })
        this.goodEl.innerHTML = listHtml;
        
    }
    summGoods(){
        const amount = this.goods.reduce((titel, good)=>titel += good.price,0);
        console.log(amount);
    }
    
    addToCart(e){
        const id = (Number(e.target.getAttribute('data-id')))
        if(id){
            fetch(`${GB_URL}/addToBasket.json`)
            .then(()=>{
                this.cart.add(this.goods.find((good) => {
                    return good.id_product === id;

                }))
            })
        }
    }
    visualCart(){
        this.cartEl.classList.toggle('active') 
    }
   

}

class CartItem {
    constructor(product_name, price, id_product){
       this.product_name = product_name;
       this.price = price;
       this.id_product = id_product; 
    }
    render(){
        return `<div class="cart-item"><h3>${this.product_name}</h3><p>${this.price}</p><button class="batton-cart" data-id=${this.id_product}> Удалить </button></div>`
    }
    
    

}

class CartList {
    constructor(){
        this.carts =[];
        // this.amount; 
        this.cartEl = document.querySelector('.cart-list');
        this.cPEl = document.querySelector('.cart-price');
        this.cartEl.addEventListener('click', this.delCart.bind(this))
    }
    add(good){
        this.carts.push(good)
        this.render()
    }
    getBasket(){
        fetch((`${GB_URL}/getBasket.json`), {
            method: 'GET'
        })
        .then((res)=>{
            return res.json()
        })
        .then((res) => {
            this.carts = res.contents;
            // this.amount= res.amount
           

            this.render()
        })
        .catch((rej) =>{
            console.log(rej)
        })
    }
    render(){
        let listHtml = '';
        this.carts.forEach(cart =>{
            
            const cartItem = new CartItem(cart.product_name, cart.price, cart.id_product);
            listHtml += cartItem.render();
            this.renderPrice();
            
        })
        this.cartEl.innerHTML = listHtml;
    }
    renderPrice(){
        // this.cPEl.innerHTML = this.amount
    }
    delCart(e){
        const id = Number(e.target.getAttribute('data-id'))
        if(id){
            fetch(`${GB_URL}/deleteFromBasket.json`)
            .then(() =>{
                this.carts.splice(this.carts.findIndex((cart) => {
                return cart.id_product === id;
                   
                }), 1)  
                this.render()    
            })
        
        }
    }

    
}
// class AddCartList extends CartList {
//     constructor(carts, amount, cartEl, cPEl){
//         super(carts, amount, cartEl, cPEl);

//         this.cartEl = document.querySelector('.cart-list');
//         this.cartEl.addEventListener('click', this.delCart.bind(this))
//         console.log(this.btnDel)
//     }
//     delCart(){
//         console.log('delite')
//     }
// }



const cart = new CartList();
const list = new GoodList(cart);
console.log(cart)
cart.getBasket();
list.fetchGoods();
list.summGoods()








// fetch(`${GB_URL}/catalogData.json`,{
//     method: 'GET'
// })
// .then((res)=>{
//     return res.json()
// })
// .catch((rej)=>{
//     console.log(rej)
// })
