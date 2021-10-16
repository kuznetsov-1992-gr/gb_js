const goods = [
    {titele: 'Shirt', price: 150, img: '12.jpg', },
    {titele: 'Socks', price: 50, img: '12.jpg',},
    {titele: 'Jacket', price: 350, img: '12.jpg',},
    {titele: 'Shoes', price: 250, img: '12.jpg',},

];
const renderGoodsItem = (titele, price, img) => `<div class="goods-item"><h3>${titele}</h3> <img src=${img} alt="photo"><p>${price} $</p> <hr></div>`;
const renderGoodsList = (list = goods)=> {
    let goodsList = list.map((item) => renderGoodsItem(item.titele, item.price, item.img)).join('');
    document.querySelector('.good-list').innerHTML = goodsList;
    
};

renderGoodsList();

// Запятая ставиться при склеивании, так как map выдает масив и оброзование масива между звениями ставиться запитая, исправить это можно при помощи метода join() внутри этого метода можно ставить обсолютно любые смыкающие символы, либо вовсе убрать их