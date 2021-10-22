class GoodItem {
    constructor(title, price, img){
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render(){
        return `<div class="goods-item">
        <h3>${this.title}</h3>
        <img src=${this.img} alt="photo">
        <p>${this.price}$</p>
    </div>`
    }
        
}


class GoodsList {
    constructor() {
        this.goods = []
    }
    fetchGoods() {
        this.goods = [
            {title: 'Shirt', price: 150, img: '12.jpg' },
            {title: 'Socks', price: 50, img: '12.jpg' },
            {title: 'Jacket', price: 350, img: '12.jpg' },
            {title: 'Shoes', price: 250, img: '12.jpg' },
        ];
    }
    render(){
        let listHtml = '';
        this.goods.forEach(good =>{
            const goodItem = new GoodItem(good.title, good.price, good.img);
            listHtml += goodItem.render();
        })
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    summGoods(){

        const amount = this.goods.reduce((titel, good)=>titel += good.price,0);
        
        console.log(amount);
    }
}

class CartArr {
    constructor(){
        this.cart = []
    }
    render(){
        
    }

    removeCart(){

    }
    
}

class CartList{
    constructor(title, price){
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }
      render(){
    
    }
    addQuantety(){

    }
    
}
const list = new GoodsList();
list.fetchGoods();
list.render();
list.summGoods()

// let x = [];
// console.log(x)