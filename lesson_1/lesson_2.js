class GoodItem {
    constructor(title, price, img){
        this.titel = title;
        this.price = price;
        this.img = img;
    }
    render(){
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`
    }
}
class GoodsList {
    constructor(){
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            {titel: 'Shirt', prise: 150, img: '12.jpg'},
            {titel: 'Socks', prise: 150, img: '12.jpg'},
            {titel: 'Jacket', prise: 150, img: '12.jpg'},
            {titel: 'Shoes', prise: 250, img: '12.jpg'},
        ];
    }
    render() {
        let listHtml ='';
        this.goods.forEach(good => {
            const goodItem = new GoodItem(good.titel, good.prise, good.img);
            listHtml += goodItem.render();
        })
        document.querySelector('.good-list').innerHTML = listHtml;

    }
}
console.log (document.querySelector('.goods-item'))

const list = new GoodsList();
list.fetchGoods();
list.render();