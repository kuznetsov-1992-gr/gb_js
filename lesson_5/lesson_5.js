const colect = new Vue({
    el: '#app',
    data: {
        name: 'GeekBrains',
        isVisible: true,
        list: [
            {name: 'Alex', lastName: 'Soft'},
            {name: 'Lena', lastName: 'Mark'},
            {name: 'Mari', lastName: 'luckas'},

        ],
        rect: {
            x: 1,
            y: 1,
        },

    },
    
    methods: {
        onclick(){
            this.isVisible = !this.isVisible;
        }
    },
    computed: {
        scuer(){
            return this.rect.x * this.rect.y;
        },
        scuerX(){
            return (this.rect.x  * Math.random() ) +  this.rect.y;;
        }
    },
})   
console.log(colect);