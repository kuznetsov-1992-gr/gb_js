
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bp = require('body-parser')
const path = require('path');

const port = 3000; 
const static_dir = '../public';



const app = express();

app.use(cors());
app.use(bp.json());
app.use(express.json());


app.use(express.static(static_dir));

app.get('/catalogData', (req, res) => {
    fs.readFile('data/catalog.json', 'utf-8', (err, data) => {
        
        res.send(data)
    });

});

app.post('/addToCart', (req, res) => {
    fs.readFile('data/cart.json', 'utf-8', (err, data) =>{
        res.send(data);
        
        const cart = JSON.parse(data);
        console.log(cart)
        let id = 1 
        console.log(cart.length)
        if(cart.length > 0){
            id = cart[cart.length - 1].id_product + 1;
        }

        const item = req.body;
        console.log(req.body);
        item.id_product = id;
        cart.push(item);
        

        fs.writeFile('data/cart.json', JSON.stringify(cart), (err) => {
            console.log('done');
            res.end()
        })
    })
})

app.get('/getCart', (req, res) => {
    fs.readFile('data/cart.json', 'utf-8', (err, data) => {
        
        res.send(data)
    });

});

app.post('/removeCart', (req, res) => {
    fs.readFile('data/cart.json', 'utf-8', (err, data) =>{
        res.send(data);
        const cartArr = JSON.parse(data)

        const id_req = req.body.id_product;
        const index = cartArr.findIndex((cart) => cart.id_product === id_req);
        if(index !== -1){
            cartArr.splice(index, 1)
            console.log(index) 
        }
       

        
        
        

        fs.writeFile('data/cart.json', JSON.stringify(cartArr), (err) => {
            console.log('done');
            res.end()
        })
    })
})

app.use((err,req,res,next)=>{
    console.log(`Error ${req.path} path`);
    console.log(`Error message ${err}`)
    
    res.status(500).json(err)
});

app.listen(port, function () {
    console.log('server is running no port!');
    
});



