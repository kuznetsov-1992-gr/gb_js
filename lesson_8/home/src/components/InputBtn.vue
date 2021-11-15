<template>
     <div class="input-button-search">
            <input v-model="inputValue" type="text">
            <button v-on:click="inputValueOn">Искать</button>
        </div>
</template>

<script>


    export default {
        name: 'InputBtn',

        methods: {
            data(){
                return {
                    inputValue: '',
                }
            
            },   

            inputValueOn(){
                this.$emit('filter',this.inputValue)
                // console.log( )
            },
            visibleCartFun(){
                this.visibleCart = !this.visibleCart
                this.$emit('oncart', this.visibleCart)
            }
        }
    }
</script>
