
const bunSize = {
    littel: {
        title: 'Bun litele',
        price: 50,
        calories: 20,
    },
    big: {
        title: 'Bun big',
        price: 100,
        calories: 40
    },
};
const STUFFING = {
    cheese: {
        title: 'filling: cheese',
        price: 10,
        calories: 20
    },
    salad: {
        title: 'filling: salad',
        price: 20,
        calories: 5
    },
    potato:{
        title: 'filling: potato',
        price: 15,
        calories: 10
    },

};
const TOPPING = {
    pepper:{
        title: 'topping: pepper',
        price: 15,
        calories: 0,
    },
    mayonnaise:{
        title: 'topping: mayonnaise',
        price: 20,
        calories: 5,
    },
};

class Hamburger {
    constructor(bunSize = bunSize.littel,  stuffing = filling.cheese){
        this.bunSize = bunSize;
        this.stuffing = stuffing;
        this.topping = [];
    }

    addTopping(topping){
        this.topping.push(topping);
    }
    removeTopping(topping){
        let position = this.topping.findIndex(top => top === topping);
        if(position !== -1){
        this.topping.splice(position, 1);
        }else{
            console.log('error: not this topping')
        }
    }
    getTopping(){
        console.log(...this.topping);
    }
    getSize(){
        console.log(this.bunSize);
    }
    getStuffing(){
        console.log(this.stuffing)
    }
    calculatePrice(){
        let calcArr = this.topping.reduce((total , top ) => total += top.price , 0);
        let calc = this.bunSize.price + this.stuffing.price + calcArr;
        console.log(calc)
    }
    calculateCalories(){
        let calcArr = this.topping.reduce((total , top ) => total += top.calories , 0);
        let calc = this.bunSize.calories + this.stuffing.calories + calcArr;
        console.log(calc)
    }
};

const p1 = new Hamburger(bunSize.littel, STUFFING.cheese);
// console.log(p1)