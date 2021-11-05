
// Vue.component('some', {
//     template: `
//     <p>
//         <span>Something</span>
//         <span>Something  else</span>
//     </p>`

// }),    

// Vue.component('some-component', {
//     props: ['name'],
//     template: '<h1>{{name}}</h1>',

// });
// Vue.component('another-component',{
//     template: '<i>VUE</i>'
// })

// const app = new Vue({
//     el: '#app'
// });

// console.log(app)


Vue.component('filter-list', {
    template: `
        <ul>
            <li v-for="item of filterlist">
                <p>{{item}}</p>
            </li>
        </ul>   
    `,
    props: {
        filterlist: Array,
    }
})

new Vue({
    el: '#app',
    data: {
        searchString: '',
        list: [
            'zero',
            'one',
            'two',
        ],
        filterList: [
            '1',
            'one',
            'two',
        ],
    },
    methods: {
        filter(){
            if(this.searchString === 0){
                this.filterList = this.list;
                return;
            }
            const reg = RegExp(this.searchString, 'i')
            this.filterList=this.list.filter((item) => reg.test(item));
            
        }
    }
})