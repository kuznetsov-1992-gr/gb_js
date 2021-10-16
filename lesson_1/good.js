const goods = [
    {titele: 'Shirt', price: 150},
    {titele: 'Socks', price: 50},
    {titele: 'Jacket', price: 350},
    {titele: 'Shoes', price: 250},

];
const renderGoodsItem = (titele, price) => `<div class="goods-item"><h3>${titele}</h3> <img src="12.jpg" alt="photo"><p>${price} $</p> <hr></div>`;
const renderGoodsList = (list = goods)=> {
    let goodsList = list.map((item) => renderGoodsItem(item.titele, item.price)).join('');
    document.querySelector('.good-list').innerHTML = goodsList;
    
};

renderGoodsList();